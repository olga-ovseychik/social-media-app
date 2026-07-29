import { graphql } from '@/graphql';

export const VOTES_BY_COMMENT_QUERY = graphql(`
  query GetVotesByComment($commentId: BigInt!) {
      comment_votesCollection(filter: {commentId: {eq: $commentId}}) {
        edges {
          node {
            id,
            userId,
            commentId
          },
        },
      },
    }
`);