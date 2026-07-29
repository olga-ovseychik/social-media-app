import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import PostDetails from "@/features/post-details/ui/PostDetails";
import { userEvent, waitFor } from "@testing-library/react-native";

jest.mock('@/features/post-details/hooks/useGetPostById', () => ({
  useGetPostById: jest.fn(() => ({ data: { item: { id: 1, createdAt: '2026-01-01' } } })),
}))

jest.mock('@/features/delete-post/hooks/useDeletePost', () => ({
  useDeletePost: jest.fn().mockReturnValue({
    deletePost: { mutate: jest.fn(), isPending: false },
  }),
}))

const mockProps = {id: 1}

describe('PostDetails Component', () => {
  test('should render correctly', () => {
    const {getByTestId} = renderWithProviders(<PostDetails {...mockProps} />);

    expect(getByTestId('post-item')).toBeDefined()
    expect(getByTestId('comments-section')).toBeDefined()
  })

  test('should call deletePost mutation with id when delete button is clicked', async () => {
    const mockMutation = jest.fn()
    require('@/features/delete-post/hooks/useDeletePost')
      .useDeletePost
      .mockReturnValueOnce({deletePost: { mutate: mockMutation, isPending: false }})

    const {getByTestId} = renderWithProviders(<PostDetails {...mockProps} />);

    const deleteButton = getByTestId('bottom-sheet-action-button');
    await userEvent.press(deleteButton);

    await waitFor(() => {
      expect(mockMutation).toBeCalledTimes(1)
      expect(mockMutation).toBeCalledWith(1)
    });
  })
})