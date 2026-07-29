import { graphql } from "@/graphql";

export const UPDATE_PROFILE_MUTATION = graphql(`
  mutation UpdateProfile($id: UUID!, $username: String!, $display_name: String, $avatar_url: String) {
      updateprofilesCollection(
          set: {
              username: $username,
              display_name: $display_name,
              avatar_url: $avatar_url,
          }
          filter: {id: {eq: $id}}
      ) {
      affectedCount
      records {
        id
      }
    }
  }
`);