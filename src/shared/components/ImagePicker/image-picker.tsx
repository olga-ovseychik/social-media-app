import { Alert, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import Button from "@/shared/components/Button/Button";
import { styles } from './image-picker.styles'
import { uploadImage } from "@/shared/lib/upload-image";
import React from "react";

type ImagePickerProps = {
  onSetImagePath: (path: string | null) => void;
  onSetImageIsLoading: (isLoading: boolean) => void;
}

export default function ImagePickerCustom({ onSetImagePath, onSetImageIsLoading }: Readonly<ImagePickerProps>) {
  const theme = useAppTheme();

  const handleUploadImage = async (uri: string) => {
    onSetImagePath(null)
    onSetImageIsLoading(true)

    const path = await uploadImage(uri)

    onSetImagePath(path);
  }

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      await handleUploadImage(result.assets[0].uri)
    }
  };

  return (
    <View style={styles(theme).container}>
      <Button onPress={pickImage} style={styles(theme).button}>
        <Text style={styles(theme).buttonText}>Pick an image from camera roll</Text>
      </Button>
    </View>
  );
}


