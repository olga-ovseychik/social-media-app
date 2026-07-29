import { useGetCommentVotes } from "@/entities/comment-votes/hooks/useGetCommentVotes";
import { CommentVote } from "@/entities/comment-votes/model/types";
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { renderHook, waitFor } from "@testing-library/react-native";


const mockData: CommentVote[] = [
  {
    id: 1,
    userId: 'mock-user-id-1',
    commentId: 1
  },
  {
    id: 2,
    userId: 'mock-user-id-2',
    commentId: 1
  },
]

jest.mock('graphql-request', () =>
  jest.fn().mockResolvedValue({
    comment_votesCollection: { edges: [] }
  })
)

describe('useGetCommentVOtes hook', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should return comments when the query succeeds', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockResolvedValueOnce({
      comment_votesCollection: { edges: mockData.map(vote => ({ node: vote })) }
    })

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useGetCommentVotes(1), { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })
    expect(result.current.data?.items).toEqual(mockData)
  })

  test('should return error when the query failed', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockRejectedValueOnce(new Error('Network error'))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useGetCommentVotes(1), { wrapper })

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})