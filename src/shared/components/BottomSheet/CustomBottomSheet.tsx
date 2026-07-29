import { Text, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from './CustomBottomSheet.styles'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { forwardRef, useCallback, useMemo, ComponentProps } from "react";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/src/types";

export type Action = {
  label: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  onPress: (value?: any) => void
}

export type CustomBottomSheetProps = {
  actions: Action[];
}

const CustomBottomSheet = forwardRef<BottomSheetMethods, CustomBottomSheetProps>(
  (props, ref) => {
    const theme = useAppTheme();
    const snapPoints = useMemo(() => ['15%'], []);
    const { actions } = props;

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

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles(theme).bottomSheetContent}>
          {actions.map((action, i) => (
            <TouchableOpacity
              key={i}
              style={styles(theme).actionWrapper}
              onPress={action.onPress}
              testID='bottom-sheet-action-button'
            >
              <Ionicons name={action.icon} color={theme.accent} size={16}/>
              <Text testID='bottom-sheet-action-label'>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </BottomSheetView>
      </BottomSheet>
    )
  })

export default CustomBottomSheet;


