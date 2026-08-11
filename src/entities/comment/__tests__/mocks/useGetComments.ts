import { CommentItemProps } from "@/entities/comment/model/types";

const defaultMock = (data?: CommentItemProps["item"][]) => ({
  data: { pages: [{ items: data ?? [] }] },
  isPending: false,
  isRefetching: false,
  hasNextPage: false,
  isFetchingNextPage: false,
  fetchNextPage: jest.fn(),
  refetch: jest.fn(),
})

type GetCommentsArgs = ReturnType<typeof defaultMock>

export function mockUseGetComments(
  data?: CommentItemProps["item"][],
  updated?: Partial<GetCommentsArgs>
) {
  return {
    getComments: {
      ...defaultMock(data),
      ...updated,
    },
  }
}