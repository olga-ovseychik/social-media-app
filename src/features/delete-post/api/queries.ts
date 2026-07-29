import { graphql } from "@/graphql";

export const DELETE_POST_MUTATION = graphql(`
    mutation DeletePost($id: BigInt!) {
      deleteFrompostsCollection(filter: {id: {eq: $id}}) {
        affectedCount
        records {
          id
        }
      },
    }
`);