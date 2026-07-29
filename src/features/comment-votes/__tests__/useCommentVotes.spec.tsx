import request from "graphql-request";
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useCommentVotes } from "@/features/comment-votes/hooks/useCommentVotes";
import { useAddComment } from "@/features/comments/add/hooks/useAddComment";

jest.mock('graphql-request', () => jest.fn());
const mockedRequest = jest.mocked(request);

describe('useCommentVotes hook - upvote mutation', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should upvote the comment when the mutation succeeds', async () => {
    mockedRequest.mockResolvedValueOnce({})

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await result.current.upvote.mutateAsync({ commentId: 1, userId: '1' })
    await waitFor(() => {
      expect(mockedRequest).toHaveBeenCalledTimes(1)
      expect(result.current.upvote.isSuccess).toBe(true)
      expect(mockedRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        { commentId: 1, userId: '1' },
        expect.anything()
      )
    })
  })

  test('should invalidate comment votes query after successful mutation', async () => {
    mockedRequest.mockResolvedValueOnce({})
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await result.current.upvote.mutateAsync({ commentId: 1, userId: '1' })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({queryKey: ['comment_votes', 1]})
  })

  test('should expose an error when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await expect(result.current.upvote.mutateAsync({ commentId: 1, userId: '1' }))
      .rejects.toThrow(mockErrorMessage)

    await waitFor(() => {
      expect(result.current.upvote.isError).toBe(true)
      expect(result.current.upvote.error?.message).toBe(mockErrorMessage)
    })
  })

  test('should not invalidate comment votes query when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')

    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await expect(result.current.upvote.mutateAsync({ commentId: 1, userId: '1' }))
      .rejects.toThrow(mockErrorMessage)

    expect(spy).not.toHaveBeenCalled()
  })
})

describe('useCommentVotes hook - unvote mutation', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should unvote the comment when the mutation succeeds', async () => {
    mockedRequest.mockResolvedValueOnce({})

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await result.current.unvote.mutateAsync({ commentId: 1, id: 1 })
    await waitFor(() => {
      expect(mockedRequest).toHaveBeenCalledTimes(1)
      expect(result.current.unvote.isSuccess).toBe(true)
      expect(mockedRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        { voteId: 1 },
        expect.anything()
      )
    })
  })

  test('should invalidate comment votes query after successful mutation', async () => {
    mockedRequest.mockResolvedValueOnce({})
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await result.current.unvote.mutateAsync({ commentId: 1, id: 1 })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({queryKey: ['comment_votes', 1]})
  })

  test('should expose an error when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await expect(result.current.unvote.mutateAsync({ commentId: 1, id: 1 }))
      .rejects.toThrow(mockErrorMessage)

    await waitFor(() => {
      expect(result.current.unvote.isError).toBe(true)
      expect(result.current.unvote.error?.message).toBe(mockErrorMessage)
    })
  })

  test('should not invalidate comment votes query when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')

    const { result } = renderHook(() => useCommentVotes(), { wrapper })

    await expect(result.current.unvote.mutateAsync({ commentId: 1, id: 1 }))
      .rejects.toThrow(mockErrorMessage)

    expect(spy).not.toHaveBeenCalled()
  })
})