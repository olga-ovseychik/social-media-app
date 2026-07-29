import type { GetCommentsByPostQuery }  from '@/graphql/graphql'
import { CommentTreeNode } from "@/features/comments/list/model/types";

export type CommentNode = NonNullable<GetCommentsByPostQuery['commentsCollection']>['edges'][number]['node']

export type CommentItemProps = {
  item: CommentTreeNode,
  onPressSettings: () => void,
}