import { createWrapper } from "@/shared/lib/renderWithProviders";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useAddComment } from "@/features/comments/add/hooks/useAddComment";
import request from "graphql-request";

jest.mock('graphql-request', () => jest.fn());
const mockedRequest = jest.mocked(request);

describe('useAddComment hook', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should add the comment when the mutation succeeds', async () => {
    mockedRequest.mockResolvedValueOnce({})

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useAddComment(), { wrapper })

    await result.current.addComment.mutateAsync({ content: 'test', parentId: null, postId: 1, userId: '1' })
    await waitFor(() => {
      expect(result.current.addComment.isSuccess).toBe(true)
      expect(mockedRequest).toHaveBeenCalledTimes(1)
      expect(mockedRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        { content: 'test', parentId: null, postId: 1, userId: '1' },
        expect.anything()
      )
    })
  })

  test('should invalidate comments query after successful mutation', async () => {
    mockedRequest.mockResolvedValueOnce({})
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')
    const { result } = renderHook(() => useAddComment(), { wrapper })

    await result.current.addComment.mutateAsync({ content: 'test', parentId: null, postId: 1, userId: '1' })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({queryKey: [1, 'comments']})
  })

  test('should expose an error when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))

    const { wrapper } = createWrapper()
    const { result } = renderHook(() => useAddComment(), { wrapper })

    await expect(result.current.addComment.mutateAsync({ content: 'test', parentId: null, postId: 1, userId: '1' }))
      .rejects.toThrow(mockErrorMessage)

    await waitFor(() => {
      expect(result.current.addComment.isError).toBe(true)
      expect(result.current.addComment.error?.message).toBe(mockErrorMessage)
    })
  })

  test('should not invalidate comments query when the request fails', async () => {
    const mockErrorMessage = 'Request failed'
    mockedRequest.mockRejectedValueOnce(new Error(mockErrorMessage))
    const { wrapper, queryClient } = createWrapper()
    const spy = jest.spyOn(queryClient, 'invalidateQueries')

    const { result } = renderHook(() => useAddComment(), { wrapper })

    await expect(result.current.addComment.mutateAsync({ content: 'test', parentId: null, postId: 1, userId: '1' }))
      .rejects.toThrow(mockErrorMessage)

    expect(spy).not.toHaveBeenCalled()
  })
})