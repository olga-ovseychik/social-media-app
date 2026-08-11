import { CommentNode } from "@/entities/comment/model/types";

export function createMockComment(id: number, parentId?: number): CommentNode {
  return {
    id: id,
    userId: `mock-user-id-${id}`,
    postId: 1,
    content: `mock-content-${id}`,
    created_at: '2026-05-09T00:00:00.000Z',
    parentId: parentId ?? null,
    deleted_at: null,
    user: {
      username: 'mock-username',
      avatar_url: 'mock-avatar.jpeg',
    }
  }
}