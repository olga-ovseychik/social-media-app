import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {styles} from '../styles/sign-out-button.styles'


export default function SignOutButton() {
  const { signOut } = useAuth();
  const theme = useAppTheme()

  function onSignOutButtonPress() {
    signOut.mutate(undefined, {
      onError: (error) => {
        console.log('Mutation error:', error)
      }
    })
  }
  return (
    <TouchableOpacity
      style={styles(theme).actionWrapper}
      onPress={onSignOutButtonPress}
      testID={'submit-button'}
    >
      <Ionicons name='log-out-outline' color={theme.accent} size={24} />
      <Text style={styles(theme).buttonText}>Sign Out</Text>
    </TouchableOpacity>
  )
}