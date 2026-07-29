import { useCallback, useMemo, useRef } from "react";
import { Pressable, Text } from 'react-native';
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { useAppSelector } from "@/store/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { selectedProfile } from "@/store/slices/auth.slice";
import SignOutButton from "@/features/auth/ui/components/sign-out-button";
import {styles} from './styles/Profile.screen.styles'


export default function ProfileScreen() {
  const theme = useAppTheme()
  const profile = useAppSelector(selectedProfile)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['15%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        opacity={0.1}
      />
    ),
    []
  );

  const handleOpenSetting = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <Text>{profile?.username}</Text>
      <Pressable onPress={handleOpenSetting} testID='profile-settings-button'>
        <Ionicons
          name='ellipsis-vertical'
          color={theme.accent}
          size={16}
        />
      </Pressable>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles(theme).bottomSheetContent}>
          <SignOutButton />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

