import request from "graphql-request";
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useDeleteComment } from "@/features/comments/delete/hooks/useDeleteComment";
import { useAddComment } from "@/features/comments/add/hooks/useAddComment";


jest.mock('graphql-request', () => jest.fn());
const mockedRequest = jest.mocked(request);

describe('useDeleteComment hook', () => {
  beforeEach(() => jest.clearAllMocks())
  const mockDeletedAt = new Date().toISOString()

  test('should delete the comment when the mutation succeeds', async () => {
    mockedRequest.mockResolvedValueOnce({})

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useDeleteComment(), { wrapper })

    await result.current.deleteComment.mutateAsync({ commentId: 1, deleted_at: mockDeletedAt })
    await waitFor(() => {
      expect(mockedRequest).toHaveBeenCalledTimes(1)
      expect(result.current.deleteComment.isSuccess).toBe(true)
      expect(mockedRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        { commentId: 1,deleted_at: expect.any(String) },
        expect.anything()
      )
    })
  })

  test('should invalidate comments query after successful mutation', async () => {
    mockedRequest.mockResolvedValueOnce({})
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')
    const { result } = renderHook(() => useDeleteComment(), { wrapper })

    await result.current.deleteComment.mutateAsync({ commentId: 1, deleted_at: mockDeletedAt })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({queryKey: [1, 'comments']})
  })

  test('should expose an error when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useDeleteComment(), { wrapper })

    await expect(result.current.deleteComment.mutateAsync({ commentId: 1, deleted_at: mockDeletedAt }))
      .rejects.toThrow(mockErrorMessage)

    await waitFor(() => {
      expect(result.current.deleteComment.isError).toBe(true)
      expect(result.current.deleteComment.error?.message).toBe(mockErrorMessage)
    })
  })

  test('should not invalidate comments query when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')

    const { result } = renderHook(() => useDeleteComment(), { wrapper })

    await expect(result.current.deleteComment.mutateAsync({ commentId: 1, deleted_at: mockDeletedAt }))
      .rejects.toThrow(mockErrorMessage)

    expect(spy).not.toHaveBeenCalled()
  })
})