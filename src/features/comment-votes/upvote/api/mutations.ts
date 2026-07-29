import { graphql } from "@/graphql";

export const UPVOTE_COMMENT_MUTATION = graphql(`
  mutation UpvoteComment($userId: UUID!, $commentId: BigInt!) {
    insertIntocomment_votesCollection(
      objects: [
        {
          userId: $userId
          commentId: $commentId
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