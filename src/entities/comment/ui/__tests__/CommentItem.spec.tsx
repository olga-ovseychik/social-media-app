import { createComment } from "@/shared/test/util/createComment";
import { CommentItemProps } from "@/entities/comment/model/types";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import CommentItem from "@/entities/comment/ui/components/CommentItem/CommentItem";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const mockUpvote = jest.fn();
const mockUnvote = jest.fn();

jest.mock('@/entities/comment-votes/hooks/useGetCommentVotes', () => ({
  useGetCommentVotes: jest.fn().mockReturnValue({data: { items: [] }}),
}))

jest.mock('@/features/comment-votes/hooks/useCommentVotes', () => ({
  useCommentVotes: () => ({
    upvote: { mutate:  mockUpvote },
    unvote: { mutate: mockUnvote },
  })
}))

const mockProps: CommentItemProps = {
  item: createComment(1),
  onPressSettings: jest.fn(),
}

describe('CommentItem component', () => {
  beforeEach(() => jest.clearAllMocks());
  dayjs.extend(relativeTime);

  test('should render comment item', () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<CommentItem {...mockProps}  />, {
      preloadedState: {
        auth: {
          profile: {id: '1', username: 'test'},
          session: null,
          isLoading: false,
          isLoggedIn: true,
          isJustLoggedIn: false,
        }
      }
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
})