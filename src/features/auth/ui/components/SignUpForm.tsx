import { TextInput, View, Text, ActivityIndicator, Platform, KeyboardAvoidingView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema, AuthFormData } from "@/features/auth/model/auth.schema";
import Button from "@/shared/components/Button/Button";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { useAuth   } from "@/features/auth/hooks/useAuth";
import { Link, useRouter } from "expo-router";
import {styles} from '../styles/sign-up-from.styles'
import { HeaderTitle } from "@react-navigation/elements";


export default function SignUpForm() {
  const theme = useAppTheme();
  const router = useRouter();
  const { signUp } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    defaultValues: {
      email: "",
      password: '',
    },
    resolver: zodResolver(authSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const onSubmit = async (data: AuthFormData) => {
    console.log('signing up......');
    signUp.mutate(data, {
      onSuccess: () => {
        console.log('signed up successfully');
        reset();
        // router.replace('/(tabs)/feed');
      },
      onError: (error) => {
        console.log('Mutation error:', error)
      }
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles(theme).container}>
      <View style={styles(theme).inner}>
        <HeaderTitle style={styles(theme).title}>Sign Up</HeaderTitle>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={(val) => {
                onChange(val);
              }}
              value={value}
              testID='email-input'
              style={styles(theme).input}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles(theme).warningText}>{errors.email.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={(val) => {
                onChange(val);
              }
              }
              value={value}
              secureTextEntry={true}
              testID='password-input'
              style={styles(theme).input}
            />
          )}
          name="password"
        />
        {errors.password &&
          <Text testID='error-text' style={styles(theme).warningText}>{errors.password.message}</Text>}

        <Button onPress={handleSubmit(onSubmit)} testID='submit-button'>
          {signUp.isPending
            ? <ActivityIndicator testID='loading-indicator' color={theme.highlight}/>
            : <Text style={styles(theme).buttonText}>Sign up</Text>}
        </Button>
        <Link style={styles(theme).link} testID='link' href='/sign-in'>Have already an account? Sign In</Link>
      </View>
    </KeyboardAvoidingView>
  )
}