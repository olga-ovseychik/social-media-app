import { graphql } from "@/graphql";

export const FETCH_COMMENTS_BY_POST_QUERY = graphql(`
  query GetCommentsByPost($first: Int!, $after: Cursor, $postId: BigInt!) {
      commentsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after, filter: { postId: { eq: $postId } }) {
        edges {
          node {
            id
            content
            userId,
            postId,
            parentId,
            created_at,
            deleted_at,
            user { 
                username, 
                avatar_url,
            },
          },
            cursor
        },
        pageInfo {
            endCursor
            hasNextPage
        }
      },
    }
`);