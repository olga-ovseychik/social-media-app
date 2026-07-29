import { graphql } from "@/graphql";

export const ADD_COMMENT_MUTATION = graphql(`
  mutation AddComment($userId: UUID!, $content: String!, $postId: BigInt!, $parentId: BigInt) {
    insertIntocommentsCollection(
      objects: [
        {
            userId: $userId,
            content: $content
            postId: $postId,
            parentId: $parentId,
        }
      ]
    ) {
      affectedCount
      records {
        id
      }
    }
  }
`);