import { renderHook, waitFor } from '@testing-library/react-native'
import { createWrapper } from "@/shared/lib/renderWithProviders";
import { useGetVotes } from "@/entities/vote/hooks/useGetVotes";
import { Vote } from "@/entities/vote/model/vote.types";

jest.mock('graphql-request', () =>
  jest.fn().mockResolvedValue({ votesCollection: { edges: [] } })
)

const mockData: Vote[] = [
  {id: 1, userId: 'mock-user-id-1', postId: 1},
  {id: 2, userId: 'mock-user-id-2', postId: 2},
]

describe('useGetVotes hook', () => {
  test('should return data on success', async () => {
    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useGetVotes(1), {wrapper})

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual({ items: [] })
  })

  test('should return votes', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockResolvedValue({votesCollection: {
      edges: mockData.map(vote => ({ node: vote }))
    } })

    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useGetVotes(1), {wrapper})

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual({ items: mockData })
  })

  test('should return error', async () => {
    const mockRequest = require('graphql-request')
    mockRequest.mockRejectedValueOnce(new Error('Network error'))

    const {wrapper} = createWrapper()
    const {result} = renderHook(() => useGetVotes(1), {wrapper})

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})