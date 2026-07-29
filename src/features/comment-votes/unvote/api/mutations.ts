import { graphql } from "@/graphql";

export const UNVOTE_COMMENT_MUTATION = graphql(`
  mutation UnvoteComment($voteId: BigInt!) {
    deleteFromcomment_votesCollection(
      filter: { id: {eq: $voteId} }
    ) {
      affectedCount
    }
  }
`);