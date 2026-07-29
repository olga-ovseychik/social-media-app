import { graphql } from '@/graphql';

export const FEED_QUERY = graphql(`
  query GetAllPosts($first: Int!, $after: Cursor) {
      postsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after) {
        edges {
          node {
            id
            content
            image_url,
            created_at,
            userId,
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


export const ADD_POST_MUTATION = graphql(`
  mutation AddPost($userId: UUID!, $content: String!, $image_url: String) {
    insertIntopostsCollection(
      objects: [
        {
            userId: $userId,
            content: $content
            image_url: $image_url
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