import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import CustomBottomSheet from "@/shared/components/BottomSheet/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { createRef } from "react";
import { act, userEvent } from "@testing-library/react-native";

const mockHandler = jest.fn();

describe('CustomBottomSheet', () => {
  test('should render correctly with props', () => {
    const bottomSheetRef = createRef<BottomSheet>();

    const {getAllByTestId, getByTestId} = renderWithProviders(<CustomBottomSheet ref={bottomSheetRef} actions={ [{
      label: 'Delete post',
      icon: 'trash-bin',
      onPress: mockHandler
    }]}/>)

    expect(getAllByTestId('bottom-sheet-action-button')).toHaveLength(1);
    expect(getByTestId('bottom-sheet-action-label')).toHaveTextContent('Delete post');
  })

  test('should call action handler if action button is clicked', async () => {
    const bottomSheetRef = createRef<BottomSheet>();

    const {getAllByTestId, getByTestId} = renderWithProviders(<CustomBottomSheet ref={bottomSheetRef} actions={ [{
      label: 'Delete post',
      icon: 'trash-bin',
      onPress: mockHandler
    }]}/>)

    const actionButton = getByTestId('bottom-sheet-action-button')
    await userEvent.press(actionButton)

    expect(mockHandler.mock.calls.length).toBe(1)
  })
})