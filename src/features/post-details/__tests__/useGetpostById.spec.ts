import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetPostById } from "@/features/post-details/hooks/useGetPostById";
import { createWrapper } from "@/shared/lib/renderWithProviders";

jest.mock("graphql-request", () => jest.fn().mockResolvedValue({
  postsCollection: {
    edges: [{
      node: {
        id: 1,
        content: 'mock-content',
        image_url: null,
        created_at: '2026-01-01',
        userId: 'mock-user-id-1',
        user: { username: 'mock-username', avatar_url: null }
      }
    }]
  }
}));

describe('useGetPostById hook', () => {
  test('should return item when request succeeds', async () => {
    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useGetPostById(1), {wrapper})

    await waitFor(() => {
      expect(result.current.data?.item).toEqual({
        id: 1,
        content: 'mock-content',
        image_url: null,
        created_at: '2026-01-01',
        userId: 'mock-user-id-1',
        user: { username: 'mock-username', avatar_url: null }
      })
    })

    expect(result.current.isSuccess).toBe(true)
  })

  test('should set request status to error when request fails', async () => {
    const module = require('graphql-request')
    module.mockRejectedValue(new Error('mock error'))

    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useGetPostById(1), {wrapper})

    await waitFor(() => {
      expect(result.current.status).toEqual('error')
      expect(result.current.isError).toBe(true)
      expect(result.current.error).not.toBeNull()
    })
  })

  test('should cache posts separately by id', async () => {
    const module = require('graphql-request')

    module.mockImplementation((_: any, __: any, variables: any) => {
      return Promise.resolve({
        postsCollection: {
          edges: [{
            node: {
              id: variables.id,
              content: `mock-content=${variables.id}`,
              image_url: null,
              created_at: '2026-01-01',
              userId: `mock-user-id-${variables.id}`,
              user: { username: 'mock-username', avatar_url: null }
            }
          }]
        }
      })
    })

    const {wrapper} = createWrapper()

    const {result: firstResult} = renderHook(() => useGetPostById(1), {wrapper})
    await waitFor(() => {
      expect(firstResult.current.isSuccess).toBe(true)
    })

    const {result: secondResult} = renderHook(() => useGetPostById(2), {wrapper})
    await waitFor(() => {
      expect(secondResult.current.isSuccess).toBe(true)
    })

    expect(firstResult.current.data?.item?.id).toEqual(1)
    expect(secondResult.current.data?.item?.id).toEqual(2)
  })
})