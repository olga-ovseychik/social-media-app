import { useState } from "react";
import { useRouter } from 'expo-router';
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { schema, FormData } from "@/features/add-post/model/add-post.schema";
import { TextInput, View, Text, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from "react-native";
import Button from "@/shared/components/Button/Button";
import { usePosts } from "@/entities/post/hooks/usePosts";
import Camera from "@/features/add-post/ui/components/Camera/Camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import {styles} from './AddPostForm.styles'
import { useAppSelector } from "@/store/hooks";
import { selectedProfile } from "@/store/slices/auth.slice";


export default function AddPostForm() {
  const theme = useAppTheme();
  const { addPost } = usePosts();
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(false)
  const [openCamera, setOpenCamera] = useState<boolean>(false)
  const [contentCount, setContentCount] = useState<number>(0)
  const router = useRouter();
  const user = useAppSelector(selectedProfile)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const onSubmit = (data: FormData) => {
    if (!data.content && !imagePath) return

    const newData = {
      userId: user?.id!,
      ...data,
      image_url:
        imagePath 
          ? `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imagePath}`
          : null,
    }

    addPost.mutate(newData, {
      onSuccess: () => {
        reset();
        router.replace('/feed');
      },
      onError: (error) => {
        console.log('Mutation error:', error)
      }
    })

    setImagePath(null)
  }

  const handleRetakePhoto = () => {
    setImagePath(null)
    setOpenCamera(true)
  }

  return (
    <View style={styles(theme).container}>
      {openCamera && (
        <Camera
          onSetImagePath={setImagePath}
          onSetOpenCamera={setOpenCamera}
          onSetImageIsLoading={setImageIsLoading}
        />
      )}

      {!openCamera && (
        <View>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles(theme).submitButton}
          >
            {addPost.isPending
              ? <ActivityIndicator color={theme.highlight}/>
              : <Text style={{color: theme.highlight, fontFamily: 'Inter_700Bold'}}>Send</Text>
            }
          </Button>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles(theme).input}
                placeholder="Your text here"
                onBlur={onBlur}
                onChangeText={(val) => {
                    onChange(val);
                    setContentCount(val.length);
                  }
                }
                value={value}
                multiline
                numberOfLines={4}
              />
            )}
            name="content"
          />
          <Text style={styles(theme, contentCount > 255).countText}>{contentCount} / 255</Text>
          {errors.content && <Text style={styles(theme).warningText}>{errors.content.message}</Text>}

          {!imageIsLoading && imagePath && (
            <Button style={styles(theme).retakeButton} onPress={handleRetakePhoto}>
              <Text style={styles(theme).retakeButtonText}>Retake photo</Text>
            </Button>
          )}
          <View style={{position: 'relative', height: 500}}>
            {imagePath && (
              <Image
                source={{ uri: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imagePath}` }}
                style={styles(theme).imagePreview}
                onLoadEnd={() => setImageIsLoading(false)}
              />
            )}
            {imageIsLoading && (
              <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"} color={theme.accent}/>
            )}
          </View>
        </View>
      )}

      {!openCamera && (
        <View style={styles(theme).controls}>
          <TouchableOpacity onPress={() => setOpenCamera(true)} style={styles(theme).addPhotoButton}>
            <Ionicons name='camera-outline' size={24} color={theme.accent} />
            <Text style={styles(theme).addPhotoBtnText}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(theme).addPhotoButton}>
            <Ionicons name='image-outline' size={24} color={theme.accent} />
            <Text style={styles(theme).addPhotoBtnText}>Choose photo from gallery</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  )
}
