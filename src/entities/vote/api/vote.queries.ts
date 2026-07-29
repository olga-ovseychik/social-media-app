import { graphql } from '@/graphql';

export const VOTES_BY_POST_QUERY = graphql(`
  query GetVotesByPost($postId: BigInt!) {
      votesCollection(filter: {postId: {eq: $postId}}) {
        edges {
          node {
            id,
            userId,
            postId
          },
        },
      },
    }
`);

export const VOTE_POST_MUTATION = graphql(`
  mutation VotePost($userId: UUID!, $postId: BigInt!) {
    insertIntovotesCollection(
      objects: [
        {
          userId: $userId
          postId: $postId
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

export const UNVOTE_POST_MUTATION = graphql(`
  mutation UnvotePost($id: BigInt!) {
    deleteFromvotesCollection(
      filter: { id: {eq: $id} }
    ) {
      affectedCount
    }
  }
`);