import { CommentItemProps } from "@/entities/comment/model/types";
import CommentsList from "@/features/comments/list/ui/components/CommentsList";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import { createMockAuthState } from "@/shared/test/mocks/auth";
import { createMockComment } from "@/shared/test/mocks/comment";
import { mockUseGetComments } from "@/entities/comment/__tests__/mocks/useGetComments";
import { useGetComments } from "@/entities/comment/hooks/useGetComments";
import { fireEvent, userEvent, waitFor } from "@testing-library/react-native";

const mockDeleteComment = jest.fn();
const mockFetchNextPage = jest.fn();

const mockCommentItems: CommentItemProps["item"][] = [
  {
    ...createMockComment(1),
    children: [
      createMockComment(2, 1),
    ],
  },
  {
    ...createMockComment(3),
    children: [],
  },
];

jest.mock("@/entities/comment/hooks/useGetComments", () => ({
  useGetComments: jest.fn(() => mockUseGetComments(mockCommentItems))
}));

jest.mock("@/features/comments/delete/hooks/useDeleteComment", () => ({
  useDeleteComment: () => ({
    deleteComment: { mutate: mockDeleteComment },
  }),
}));

const mockProps = {
  postId: 1,
};

describe("CommentList component", () => {
  const user = userEvent.setup()

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render loading indicator when fetching comments", async () => {
    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments(mockCommentItems,
      { isPending: true }
    ));

    const { findByTestId } = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    expect(await findByTestId('loading-indicator')).toBeTruthy();
  })

  test("should render no comments message when comments array is empty", async () => {
    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments());

    const { findByTestId } = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    expect(await findByTestId('no-content-text')).toBeTruthy();
  })

  test("should render FlatList with comments", async () => {
    const { findAllByTestId } = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    expect(await findAllByTestId('comment-item')).toHaveLength(2);
  })

  test("should fetch next page when comments length is <= 5 and hasNextPage is true", async () => {
    const mockItems = Array.from({ length: 5 }).map((_, i) => createMockComment(i+1));

    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments(mockItems,
      {
        hasNextPage: true,
        fetchNextPage: mockFetchNextPage
      }
    ));

    renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    await waitFor(() => {
      expect(mockFetchNextPage).toHaveBeenCalled();
    });
  })

  test("should call fetchNextPage on onEndReached event", async () => {
    const mockItems = Array.from({ length: 5 })
      .map((_, i) => createMockComment(i+1));

    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments(mockItems,
      {
        hasNextPage: true,
        fetchNextPage: mockFetchNextPage
      }
    ));

    const { getByTestId } = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    const flatList = getByTestId('flat-list');

    mockFetchNextPage.mockClear();
    fireEvent(flatList, 'onEndReached');

    await waitFor(() => {
      expect(mockFetchNextPage).toHaveBeenCalledTimes(1);
    });
  })

  test("should open bottom sheet with delete action on handleOpenSetting", async () => {
    const mockItems = Array.from({ length: 5 })
      .map((_, i) => createMockComment(i+1));

    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments(mockItems,
      {
        hasNextPage: true,
        fetchNextPage: mockFetchNextPage,
      }
    ));

    const { getAllByTestId, findByText } = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    const commentSettingsButton = getAllByTestId('comment-settings-button');

    await user.press(commentSettingsButton[0])

    expect(await findByText(/delete/i)).toBeTruthy();
  })

  test("should call deleteComment mutation when delete action is pressed", async () => {
    const mockItems = Array.from({ length: 5 }).map((_, i) => createMockComment(i+1));

    (useGetComments as jest.Mock).mockReturnValueOnce(mockUseGetComments(mockItems,
      {
        hasNextPage: true,
        isFetchingNextPage: true,
      }
    ));

    const {findByText, getAllByTestId} = renderWithProviders(<CommentsList {...mockProps} />, {
      preloadedState: createMockAuthState(),
    });

    const commentSettingsButton = getAllByTestId('comment-settings-button');
    await user.press(commentSettingsButton[0])
    const deleteButton = await findByText(/delete/i)
    await user.press(deleteButton)

    expect(mockDeleteComment).toHaveBeenCalledTimes(1)
  });
});
