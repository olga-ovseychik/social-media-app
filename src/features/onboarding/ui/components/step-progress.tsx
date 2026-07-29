import React, { useState } from 'react';
import { View, Text, TextInput, Image, ActivityIndicator, StyleSheet } from 'react-native';
import {styles} from '../../../auth/ui/styles/step-progress.styles'
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, schema } from "@/features/onboarding/model/onboarding.schema";
import ImagePickerCustom from "@/shared/components/ImagePicker/image-picker";
import Button from "@/shared/components/Button/Button";
import { useRouter } from "expo-router";
import { useProfiles } from "@/entities/user/hooks/useProfiles";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectedProfile, setProfile } from "@/store/slices/auth.slice";


export default function StepProgress() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const theme = useAppTheme();
  const [username, setUsername] = useState<string | null>('username')
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(false)
  const [imagePath, setImagePath] = useState<string | null>(null)
  const {updateProfile} = useProfiles()
  const user = useAppSelector(selectedProfile)
  const dispatch = useAppDispatch()
  const router = useRouter();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      avatar_url: '',
      display_name: '',
    },
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const handleNext = async () => {
    const isValid = await trigger('username')

    if (isValid) {
      setStep(prevStep => Math.min(prevStep + 1, totalSteps));
    } else return
  };

  const handlePrevious = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const onSubmit = (data: FormData) => {
    const cleaned = Object.fromEntries(Object.entries(data)
      .map(([k, v]) => [k, v || null])) as FormData;

    const updatedData = {...cleaned, id: user?.id!}
    updateProfile.mutate(updatedData, {
      onSuccess: (data) => {
        dispatch(setProfile(updatedData))
        reset();
        router.replace('/feed');
      },
      onError: (error) => {
        console.log('Mutation error:', error)
      }
    })
  }

  const renderStepIndicator = () => {
    const indicators = [];
    const stepLabels = [
      'Add your username',
      'Add your display name',
      'Add your profile picture',
    ];

    for (let i = 1; i <= totalSteps; i++) {
      indicators.push(
        <View key={i} style={styles(theme).stepContainer}>
          <View style={[styles(theme).stepIndicator, i <= step && styles(theme).activeStep]}>
            <Text style={[styles(theme).stepIndex, i <= step && styles(theme).activeStepText]}>{i}</Text>
          </View>
          {i < totalSteps && <View style={[styles(theme).line, i < step && styles(theme).activeLine]} />}
        </View>
      );
    }
    return (
      <View style={styles(theme).indicatorContainer} testID={'indicators-container'}>
        <View style={{ flexDirection: 'row' }}>
          {indicators}
        </View>
        <Text testID='step-label' style={styles(theme).stepText}>{stepLabels[step-1]}</Text>
      </View>);
  };

  return (
    <View style={styles(theme).container}>
      {renderStepIndicator()}

      <View style={styles(theme).contentContainer}>
        {step === 1 && (
          <View>
            <Text testID={'username-text'} style={styles(theme).username}>@{username}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles(theme).input}
                  placeholder="Username"
                  onBlur={onBlur}
                  onChangeText={(val) => {
                    onChange(val);
                    setUsername(val);
                  }}
                  value={value}
                  testID={'username-AddCommentForm'}
                />
              )}
              name="username"
            />
            {errors.username &&
              <Text
                testID={'username-errors'}
                style={styles(theme).warningText}>
                {errors.username.message}
              </Text>}
          </View>
        )}
        {step === 2 && (
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles(theme).input}
                  placeholder="Display name"
                  onBlur={onBlur}
                  onChangeText={(val) => {
                    onChange(val)}
                  }
                  value={value ?? undefined}
                  testID='display_name-input'
                />
              )}
              name="display_name"
            />
            {errors.display_name && <Text style={styles(theme).warningText}>{errors.display_name.message}</Text>}
          </View>
        )}
        {step === 3 && (
          <View>
            {imageIsLoading && <ActivityIndicator style={StyleSheet.absoluteFill} size="large" color={theme.accent}/>}
            <Image
              source={{ uri: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imagePath}` }}
              style={styles(theme).profileImagePreview}
              onLoadEnd={() => setImageIsLoading(false)}
            />
            <ImagePickerCustom
              onSetImageIsLoading={setImageIsLoading}
              onSetImagePath={setImagePath}
            />
          </View>
        )}
      </View>

      <View style={styles(theme).buttonContainer}>
        {step > 1 && (
          <Button testID='back-button' onPress={handlePrevious} style={[styles(theme).backButton]}>
            <Text style={styles(theme).backButtonText}>Back</Text>
          </Button>
        )}
        {step < totalSteps ? (
          <Button testID='next-button' onPress={handleNext} style={[styles(theme).nextButton]}>
            <Text style={styles(theme).nextButtonText}>Next</Text>
          </Button>
        ) : (
          <Button testID='done-button' onPress={handleSubmit(onSubmit)} style={[styles(theme).nextButton]}>
            <Text style={styles(theme).nextButtonText}>Done</Text>
          </Button>
        )}
      </View>
    </View>
  );
}


