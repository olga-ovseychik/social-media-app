import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import PostsList from "@/features/feed/ui/components/PostsList/PostsList";
import { act, userEvent, waitFor } from "@testing-library/react-native";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
  usePathname: jest.fn(),
  useFocusEffect: jest.fn(),
}))

jest.mock('@/features/delete-post/hooks/useDeletePost', () => ({
  useDeletePost: jest.fn().mockReturnValue({
    deletePost: { mutate: jest.fn(), isPending: false },
  }),
}))

describe('PostList component', () => {
  test('should render post list', async () => {
    const { getAllByTestId } = renderWithProviders(<PostsList />);

    await waitFor(() => expect(getAllByTestId('post-item')).toHaveLength(2))
  })

  test('should call deletePost mutation with id when delete button is clicked', async () => {
    const mockMutation = jest.fn()
    require('@/features/delete-post/hooks/useDeletePost')
      .useDeletePost
      .mockReturnValueOnce({deletePost: { mutate: mockMutation, isPending: false }})

    const { findByTestId, getAllByTestId} = renderWithProviders(<PostsList />);

    const settingsButtons = getAllByTestId('post-settings-button');
    await userEvent.press(settingsButtons[0]);

    const deleteButton = await findByTestId('bottom-sheet-action-button')
    await userEvent.press(deleteButton);

    await waitFor(() => {
      expect(mockMutation).toBeCalledTimes(1)
      expect(mockMutation).toBeCalledWith(1)
    });
  })

  test('should return loading indicator when state is pending', async () => {
    const mockUsePosts = require("@/entities/post/hooks/usePosts").usePosts

    mockUsePosts.mockReturnValueOnce({
      getPosts: {
        ...mockUsePosts().getPosts,
        isPending: true,
      }
    })

    const { findByTestId } = renderWithProviders(<PostsList />);

    await waitFor(() => expect(findByTestId('loading-indicator')).toBeDefined())
  })
})