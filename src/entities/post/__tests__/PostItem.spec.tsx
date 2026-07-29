import { fireEvent, userEvent } from "@testing-library/react-native";
import { renderWithProviders } from "@/shared/lib/renderWithProviders";
import { PostItemProps } from "@/entities/post/model/types";
import PostItem from "../ui/components/PostItem/PostItem";
import { useVotes } from "@/features/vote/hooks/useVotes";
import { useGetVotes } from "@/entities/vote/hooks/useGetVotes";
import dayjs from "dayjs";

const mockUpvote = jest.fn();
const mockUnvote = jest.fn();

jest.mock('@/features/vote/hooks/useVotes', () => ({
  useVotes: () => ({
    upvote: {mutate: mockUpvote, isPending: false},
    unvote: {mutate: mockUnvote, isPending: false},
  }),
}))

jest.mock('@/entities/vote/hooks/useGetVotes', () => ({
  useGetVotes: jest.fn().mockReturnValue({data: { items: [] }}),
}))

const mockProps: PostItemProps = {
  item: {
    id: 1,
    content: 'mock-content',
    image_url: 'mock-image',
    created_at: '2019-05-10T00:00:00.000Z',
  },
  onPressSettings: jest.fn(),
}

describe("PostItem component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("should renders correctly with passed props", () => {
    const {getByTestId} = renderWithProviders(<PostItem {...mockProps}/>, {
      preloadedState: {
        auth: {
          profile: {id: '1', username: 'test'},
          session: null,
          isLoading: false,
          isLoggedIn: false,
          isJustLoggedIn: false,
        }
      }
    });

    expect(getByTestId('post-timestamp')).toHaveTextContent(` • ${dayjs(mockProps.item.created_at).fromNow()}`);
    expect(getByTestId('post-content')).toHaveTextContent(`${mockProps.item.content}`);
    expect(getByTestId('post-image').props.source[0].uri).toContain(mockProps.item.image_url);
    expect(getByTestId('post-settings-button')).toBeDefined()
  })

  test("should call onPressSettings when the settings button is pressed", () => {
    const {getByTestId} = renderWithProviders(<PostItem {...mockProps}/>);

    fireEvent.press(getByTestId('post-settings-button'));
    expect(mockProps.onPressSettings).toBeCalledTimes(1)
  })

  test("should show votes count", async () => {
    require('@/entities/vote/hooks/useGetVotes')
      .useGetVotes
      .mockReturnValue({data: {items: [{id: 1, userId: '1', postId: 1}]}})

    const {getByTestId} = renderWithProviders(<PostItem {...mockProps}/>);
    const voteCount = getByTestId('post-vote-count');

    expect(voteCount).toHaveTextContent('1')
  })

  test("should call onUpvote when the vote button is pressed", async () => {
    require("@/entities/vote/hooks/useGetVotes")
      .useGetVotes
      .mockReturnValue({data: {items: []}})

    const {getByTestId} = renderWithProviders(<PostItem {...mockProps}/>);
    const voteButton = getByTestId('post-vote-button');

    await userEvent.press(voteButton);
    expect(mockUpvote).toHaveBeenCalledTimes(1);
  })

  test("should call onDownvote when the vote button is pressed", async () => {
    require("@/entities/vote/hooks/useGetVotes")
      .useGetVotes
      .mockReturnValue({data: {items: [{id: 1, userId: '1', postId: 1}]}})

    const {getByTestId} = renderWithProviders(<PostItem {...mockProps}/>, {
      preloadedState: {
        auth: {
          profile: {id: '1', username: 'test'},
          session: null,
          isLoading: false,
          isLoggedIn: false,
          isJustLoggedIn: false,
        }
      }
    });
    const voteButton = getByTestId('post-vote-button');

    await userEvent.press(voteButton);
    expect(mockUnvote).toHaveBeenCalledTimes(1);
  })
})