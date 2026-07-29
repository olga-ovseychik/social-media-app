import { graphql } from "@/graphql";

export const FETCH_POST_BY_ID_QUERY = graphql(`
  query GetPostById($id: BigInt!) {
      postsCollection(filter: {id: {eq: $id}}) {
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
        },
      },
    }
`);