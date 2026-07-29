import { CommentNode } from "@/entities/comment/model/types";

export type CommentTreeNode = CommentNode & {
  children?: CommentNode[]
}