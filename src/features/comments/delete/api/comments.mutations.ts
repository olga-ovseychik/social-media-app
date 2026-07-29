import { graphql } from "@/graphql";

export const DELETE_COMMENT_MUTATION = graphql(`
  mutation DeleteComment($commentId: BigInt!, $deleted_at: Datetime!) {
      updatecommentsCollection(
        set: { deleted_at: $deleted_at }
        filter: {id: {eq: $commentId}}
    ) {
      affectedCount
      records {
        id
      }
    }
  }
`);