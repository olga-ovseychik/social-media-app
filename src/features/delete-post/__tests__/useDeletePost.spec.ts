import { act, renderHook, waitFor } from "@testing-library/react-native";
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { useDeletePost } from "@/features/delete-post/hooks/useDeletePost";

jest.mock('graphql-request', () => jest.fn().mockImplementation(() => {
  return Promise.resolve({ deleteFrompostsCollection: { affectedCount: 1 } })
}))
describe('useDeletePost hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('should delete post successfully', async () => {

    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useDeletePost(), {wrapper})

    await act(async () => {
      result.current.deletePost.mutate(1)
    })

    await waitFor(() => {
      expect(result.current.deletePost.isSuccess).toBe(true)
    })
  })

  test('should return error when mutation fails', async () => {
    const module = require('graphql-request')
    module.mockImplementationOnce(() => Promise.reject(new Error('Error')))

    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useDeletePost(), {wrapper})

    await act(async () => {
      result.current.deletePost.mutate(1)
    })

    await waitFor(() => {
      expect(result.current.deletePost.isError).toBe(true)
    })
  })
})