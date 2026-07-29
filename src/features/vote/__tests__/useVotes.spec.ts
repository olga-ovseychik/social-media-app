import { act, renderHook, waitFor } from '@testing-library/react-native'
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { useVotes } from "@/features/vote/hooks/useVotes";

jest.mock('graphql-request', () => jest.fn().mockResolvedValue({
  insertIntovotesCollection: {
    afterCount: 1,
    records: [{id: 1}]
  }
}))

describe('useVotes hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('should call upvote with valid data', async () => {
    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useVotes(), {wrapper})

    act(() => {
      result.current.upvote.mutate({ userId: '1', postId: 1 })
    })

    await waitFor(() => {
      expect(result.current.upvote.isSuccess).toBe(true)
    })
    expect(require('graphql-request')).toHaveBeenCalledTimes(1)
  })

  test('should call unvote with valid data', async () => {
    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useVotes(), {wrapper})

    act(() => {
      result.current.unvote.mutate({ id: 1, postId: 1 })
    })

    await waitFor(() => {
      expect(result.current.unvote.isSuccess).toBe(true)
    })
    expect(require('graphql-request')).toHaveBeenCalledTimes(1)
  })

  test('should optimistically update cache before unvote request completes', async () => {
    const mockRequest = require('graphql-request')

    mockRequest.mockImplementation(() => new Promise(resolve =>
      setTimeout(() => resolve({deleteFromvotesCollection: {affectedCount: 1}}), 100)
    ))

    const {wrapper, queryClient} = createWrapper()

    queryClient.setQueryData(['votes', 1], {
      items: [{ id: 1, userId: '1', postId: 1 }]
    })
    const {result} = renderHook(() => useVotes(), {wrapper})

    await act(async () => {
      result.current.unvote.mutate({ id: 1, postId: 1 })
    })

    const cache = queryClient.getQueryData(['votes', 1])
    expect(cache).toEqual({ items: [] })

    await waitFor(() => {
      expect(result.current.unvote.isSuccess).toBe(true)
    })
    expect(require('graphql-request')).toHaveBeenCalledTimes(1)
  })

  test('should optimistically update cache before upvote request completes', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(1)
    const mockRequest = require('graphql-request')

    mockRequest.mockImplementation(() => new Promise(resolve =>
      setTimeout(() =>
        resolve({insertIntovotesCollection: { affectedCount: 1, records: [{id: 1}] }})
        , 100)
    ))

    const {wrapper, queryClient} = createWrapper()

    queryClient.setQueryData(['votes', 1], { items: [] })

    const {result} = renderHook(() => useVotes(), {wrapper})

    await act(async () => {
      result.current.upvote.mutate({ userId: '1', postId: 1 })
    })

    const cache = queryClient.getQueryData(['votes', 1])
    expect(cache).toEqual({ items: [{ id: 1, userId: '1', postId: 1 }] })

    await waitFor(() => {
      expect(result.current.upvote.isSuccess).toBe(true)
    })
    expect(require('graphql-request')).toHaveBeenCalledTimes(1)
  })

  test('should restore cache when unvote request fails', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockRejectedValueOnce(new Error('Network error'))

    const {wrapper, queryClient} = createWrapper()
    queryClient.setQueryData(['votes', 1], {
      items: [{ id: 1, userId: '1', postId: 1 }]
    })

    const {result} = renderHook(() => useVotes(), {wrapper})

    await act(async () => {
      result.current.unvote.mutate({ id: 1, postId: 1 })
    })

    await waitFor(() => {
      expect(result.current.unvote.isError).toBe(true)
    })

    const cache = queryClient.getQueryData(['votes', 1])
    expect(cache).toEqual({ items: [{ id: 1, userId: '1', postId: 1 }] })
  })

  test('should restore cache when upvote request fails', async () => {
    const mockRequest = require('graphql-request')
    jest.spyOn(Date, 'now').mockReturnValue(1)

    mockRequest.mockImplementation(() => new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Network error')), 100)
    ))

    const {wrapper, queryClient} = createWrapper()

    queryClient.setQueryData(['votes', 1], { items: [] })

    const {result} = renderHook(() => useVotes(), {wrapper})

    await act(async () => {
      result.current.upvote.mutate({ userId: '1', postId: 1 })
    })

    const optUpdatedCache = queryClient.getQueryData(['votes', 1])
    expect(optUpdatedCache).toEqual({ items: [{ id: 1, userId: '1', postId: 1 }] })

    await waitFor(() => {
      expect(result.current.upvote.isError).toBe(true)
    })

    const cache = queryClient.getQueryData(['votes', 1])
    expect(cache).toEqual({ items: [] })
  })
})