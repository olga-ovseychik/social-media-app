import { CommentTreeNode } from "@/features/comments/list/model/types";
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetComments } from "@/entities/comment/hooks/useGetComments";

jest.mock("graphql-request", () =>
  jest.fn().mockResolvedValue({ commentsCollection: { edges: [], pageInfo: { endCursor: null, hasNextPage: false } } }),
)

const mockData: CommentTreeNode[] = [
  {
    id: 1,
    userId: 'mock-user-id-1',
    postId: 1,
    content: 'mock-content-1',
    created_at: '2026-05-09T00:00:00.000Z',
  },
  {
    id: 2,
    userId: 'mock-user-id-2',
    postId: 1,
    content: 'mock-content-2',
    created_at: '2026-04-09T00:00:00.000Z',
  },
]

describe('useGetComments hook', () => {
  test('should return comments when the query succeeds', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockResolvedValueOnce({ commentsCollection: {
      edges: mockData.map(comment => ({ node: comment })),
      pageInfo: { endCursor: null, hasNextPage: false }
    }})

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useGetComments(1), { wrapper })

    await waitFor(() => {
      expect(result.current.getComments.isSuccess).toBe(true)
    })

    expect(result.current.getComments.data?.pages[0].items).toEqual(mockData)
  })

  test('should return error when the query failed', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockResolvedValueOnce(new Error('Network Error'))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useGetComments(1), { wrapper })

    await waitFor(() => expect(result.current.getComments.isError).toBe(true))
  })
})