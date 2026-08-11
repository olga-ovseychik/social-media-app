import { userEvent } from "@testing-library/react-native";
import { createMockComment } from "@/shared/test/mocks/comment";
import { CommentItemProps } from "@/entities/comment/model/types";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import CommentItem from "@/entities/comment/ui/components/CommentItem/CommentItem";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Vote } from "@/entities/vote/model/vote.types";
import { createMockAuthState } from "@/shared/test/mocks/auth";

const mockUpvote = jest.fn();
const mockUnvote = jest.fn();
let mockVotes: { items: Vote[] } = { items: [] }

jest.mock('@/entities/comment-votes/hooks/useGetCommentVotes', () => ({
  useGetCommentVotes: jest.fn(() => ({
    data: mockVotes
  }))
}))

jest.mock('@/features/comment-votes/hooks/useCommentVotes', () => ({
  useCommentVotes: () => ({
    upvote: { mutate: mockUpvote },
    unvote: { mutate: mockUnvote },
  })
}))

const mockProps: CommentItemProps = {
  item: createMockComment(1),
  onPressSettings: jest.fn(),
}

describe('CommentItem component', () => {
  const user = userEvent.setup()
  dayjs.extend(relativeTime);

  beforeEach(() => jest.clearAllMocks());

  test('should render comment item', () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    expect(getByTestId('comment-user-avatar').props.source[0].uri).toContain(mockProps.item.user?.avatar_url)
    expect(getByTestId('comment-username')).toHaveTextContent(`@${mockProps.item.user?.username!}`)
    expect(getByTestId('comment-timestamp')).toHaveTextContent(`• ${dayjs(mockProps.item.created_at).fromNow()}`)
    expect(getByTestId('comment-content')).toHaveTextContent(mockProps.item.content!);
    expect(getByTestId('comment-settings-button')).toBeDefined()
    expect(getByTestId('comment-vote-button')).toBeDefined()
    expect(getByTestId('comment-replies-button')).toBeDefined()
    expect(getByTestId('comment-reply-button')).toBeDefined()
    expect(queryByTestId('comment-form-container')).not.toBeOnTheScreen();
    expect(queryByTestId('comment-replies')).not.toBeOnTheScreen();
  })

  test('should call upvote when button clicked', async () => {
    const { getByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const voteButton = getByTestId('comment-vote-button')

    await userEvent.press(voteButton)
    expect(mockUpvote).toHaveBeenCalledTimes(1)
  })

  test('should call unvote when button clicked', async () => {
    const { getByTestId, rerender } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const voteButton = getByTestId('comment-vote-button')

    await user.press(voteButton)
    expect(mockUpvote).toHaveBeenCalledTimes(1)

    mockVotes = {
      items: [{ id: 1, userId: '1', postId: 1 }],
    }

    rerender(<CommentItem {...mockProps}  />)

    await user.press(voteButton)
    expect(mockUnvote).toHaveBeenCalledTimes(1)
  })

  test('should show reply form when button is clicked', async () => {
    const { getByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const replyButton = getByTestId('comment-reply-button')
    await user.press(replyButton)
    expect(getByTestId('comment-form-container')).toBeDefined()
  })

  test('should hide reply form when cancel button is clicked', async () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const replyButton = getByTestId('comment-reply-button')
    await user.press(replyButton)
    expect(getByTestId('comment-form-container')).toBeDefined()

    const cancelButton = getByTestId('form-cancel-button')
    await user.press(cancelButton)
    expect(queryByTestId('comment-form-container')).toBeNull()
  })

  test('should show replies when button is clicked', async () => {
    const { getByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const repliesButton = getByTestId('comment-replies-button')
    await user.press(repliesButton)
    expect(getByTestId('comment-replies')).toBeDefined()
  })

  test('should hide replies when button is clicked', async () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: createMockAuthState()
    })

    const repliesButton = getByTestId('comment-replies-button')
    await user.press(repliesButton)
    expect(getByTestId('comment-replies')).toBeDefined()

    await user.press(repliesButton)
    expect(queryByTestId('comment-replies')).toBeNull()
  })
})