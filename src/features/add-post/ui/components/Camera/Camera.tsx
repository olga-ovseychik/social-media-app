import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import Button from "@/shared/components/Button/Button";
import {styles} from './Camera.styles'
import { uploadImage } from "@/shared/lib/upload-image";


type Props = {
  onSetImagePath: (path: string) => void;
  onSetOpenCamera: (open: boolean) => void;
  onSetImageIsLoading: (loading: boolean) => void;
}

export default function Camera({onSetImagePath, onSetOpenCamera, onSetImageIsLoading}: Readonly<Props>) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState<CameraView | null>(null);
  const theme = useAppTheme()

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles(theme).container}>
        <Text style={styles(theme).message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>
          <Text>Grant permission</Text>
        </Button>
      </View>
    );
  }

  const handleOpenCamera = (open: boolean) => {
    onSetOpenCamera(open)
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const captureImage = async () => {
    if (permission.granted) {
      const photo = await camera!.takePictureAsync({ base64: true });
      await handleUploadImage(photo.uri);
    }
  }

  const handleUploadImage = async (uri: string) => {
    onSetImageIsLoading(true)
    onSetOpenCamera(false)

    const imagePath = await uploadImage(uri)

    onSetImagePath(imagePath);
  }

  return (
    <View style={styles(theme).container}>
      <CameraView
        style={styles(theme).camera}
        facing={facing}
        ref={ref => {
          setCamera(ref);
        }}
      />
      <View style={styles(theme).buttonCloseContainer}>
        <TouchableOpacity style={styles(theme).button} onPress={() => handleOpenCamera(false)}>
          <Ionicons name='close-outline' size={52} />
        </TouchableOpacity>
      </View>
      <View style={styles(theme).buttonToggleContainer}>
        <TouchableOpacity style={styles(theme).button} onPress={toggleCameraFacing}>
          <Ionicons name='sync-circle-outline' size={52} />
        </TouchableOpacity>
      </View>
      <View style={styles(theme).buttonCaptureContainer}>
        <TouchableOpacity style={styles(theme).button} onPress={captureImage}  >
          <Ionicons name='stop-circle-outline' size={52} />
        </TouchableOpacity>
      </View>
    </View>
  );
}