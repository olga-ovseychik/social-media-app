/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetVotesByComment($commentId: BigInt!) {\n      comment_votesCollection(filter: {commentId: {eq: $commentId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            commentId\n          },\n        },\n      },\n    }\n": typeof types.GetVotesByCommentDocument,
    "\n  query GetCommentsByPost($first: Int!, $after: Cursor, $postId: BigInt!) {\n      commentsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after, filter: { postId: { eq: $postId } }) {\n        edges {\n          node {\n            id\n            content\n            userId,\n            postId,\n            parentId,\n            created_at,\n            deleted_at,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n": typeof types.GetCommentsByPostDocument,
    "\n  query GetAllPosts($first: Int!, $after: Cursor) {\n      postsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n": typeof types.GetAllPostsDocument,
    "\n  mutation AddPost($userId: UUID!, $content: String!, $image_url: String) {\n    insertIntopostsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            image_url: $image_url\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.AddPostDocument,
    "\n  mutation UpdateProfile($id: UUID!, $username: String!, $display_name: String, $avatar_url: String) {\n      updateprofilesCollection(\n          set: {\n              username: $username,\n              display_name: $display_name,\n              avatar_url: $avatar_url,\n          }\n          filter: {id: {eq: $id}}\n      ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.UpdateProfileDocument,
    "\n  query GetVotesByPost($postId: BigInt!) {\n      votesCollection(filter: {postId: {eq: $postId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            postId\n          },\n        },\n      },\n    }\n": typeof types.GetVotesByPostDocument,
    "\n  mutation VotePost($userId: UUID!, $postId: BigInt!) {\n    insertIntovotesCollection(\n      objects: [\n        {\n          userId: $userId\n          postId: $postId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.VotePostDocument,
    "\n  mutation UnvotePost($id: BigInt!) {\n    deleteFromvotesCollection(\n      filter: { id: {eq: $id} }\n    ) {\n      affectedCount\n    }\n  }\n": typeof types.UnvotePostDocument,
    "\n  mutation UnvoteComment($voteId: BigInt!) {\n    deleteFromcomment_votesCollection(\n      filter: { id: {eq: $voteId} }\n    ) {\n      affectedCount\n    }\n  }\n": typeof types.UnvoteCommentDocument,
    "\n  mutation UpvoteComment($userId: UUID!, $commentId: BigInt!) {\n    insertIntocomment_votesCollection(\n      objects: [\n        {\n          userId: $userId\n          commentId: $commentId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.UpvoteCommentDocument,
    "\n  mutation AddComment($userId: UUID!, $content: String!, $postId: BigInt!, $parentId: BigInt) {\n    insertIntocommentsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            postId: $postId,\n            parentId: $parentId,\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.AddCommentDocument,
    "\n  mutation DeleteComment($commentId: BigInt!, $deleted_at: Datetime!) {\n      updatecommentsCollection(\n        set: { deleted_at: $deleted_at }\n        filter: {id: {eq: $commentId}}\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": typeof types.DeleteCommentDocument,
    "\n    mutation DeletePost($id: BigInt!) {\n      deleteFrompostsCollection(filter: {id: {eq: $id}}) {\n        affectedCount\n        records {\n          id\n        }\n      },\n    }\n": typeof types.DeletePostDocument,
    "\n  query GetPostById($id: BigInt!) {\n      postsCollection(filter: {id: {eq: $id}}) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n        },\n      },\n    }\n": typeof types.GetPostByIdDocument,
};
const documents: Documents = {
    "\n  query GetVotesByComment($commentId: BigInt!) {\n      comment_votesCollection(filter: {commentId: {eq: $commentId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            commentId\n          },\n        },\n      },\n    }\n": types.GetVotesByCommentDocument,
    "\n  query GetCommentsByPost($first: Int!, $after: Cursor, $postId: BigInt!) {\n      commentsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after, filter: { postId: { eq: $postId } }) {\n        edges {\n          node {\n            id\n            content\n            userId,\n            postId,\n            parentId,\n            created_at,\n            deleted_at,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n": types.GetCommentsByPostDocument,
    "\n  query GetAllPosts($first: Int!, $after: Cursor) {\n      postsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n": types.GetAllPostsDocument,
    "\n  mutation AddPost($userId: UUID!, $content: String!, $image_url: String) {\n    insertIntopostsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            image_url: $image_url\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.AddPostDocument,
    "\n  mutation UpdateProfile($id: UUID!, $username: String!, $display_name: String, $avatar_url: String) {\n      updateprofilesCollection(\n          set: {\n              username: $username,\n              display_name: $display_name,\n              avatar_url: $avatar_url,\n          }\n          filter: {id: {eq: $id}}\n      ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  query GetVotesByPost($postId: BigInt!) {\n      votesCollection(filter: {postId: {eq: $postId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            postId\n          },\n        },\n      },\n    }\n": types.GetVotesByPostDocument,
    "\n  mutation VotePost($userId: UUID!, $postId: BigInt!) {\n    insertIntovotesCollection(\n      objects: [\n        {\n          userId: $userId\n          postId: $postId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.VotePostDocument,
    "\n  mutation UnvotePost($id: BigInt!) {\n    deleteFromvotesCollection(\n      filter: { id: {eq: $id} }\n    ) {\n      affectedCount\n    }\n  }\n": types.UnvotePostDocument,
    "\n  mutation UnvoteComment($voteId: BigInt!) {\n    deleteFromcomment_votesCollection(\n      filter: { id: {eq: $voteId} }\n    ) {\n      affectedCount\n    }\n  }\n": types.UnvoteCommentDocument,
    "\n  mutation UpvoteComment($userId: UUID!, $commentId: BigInt!) {\n    insertIntocomment_votesCollection(\n      objects: [\n        {\n          userId: $userId\n          commentId: $commentId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.UpvoteCommentDocument,
    "\n  mutation AddComment($userId: UUID!, $content: String!, $postId: BigInt!, $parentId: BigInt) {\n    insertIntocommentsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            postId: $postId,\n            parentId: $parentId,\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.AddCommentDocument,
    "\n  mutation DeleteComment($commentId: BigInt!, $deleted_at: Datetime!) {\n      updatecommentsCollection(\n        set: { deleted_at: $deleted_at }\n        filter: {id: {eq: $commentId}}\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n": types.DeleteCommentDocument,
    "\n    mutation DeletePost($id: BigInt!) {\n      deleteFrompostsCollection(filter: {id: {eq: $id}}) {\n        affectedCount\n        records {\n          id\n        }\n      },\n    }\n": types.DeletePostDocument,
    "\n  query GetPostById($id: BigInt!) {\n      postsCollection(filter: {id: {eq: $id}}) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n        },\n      },\n    }\n": types.GetPostByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetVotesByComment($commentId: BigInt!) {\n      comment_votesCollection(filter: {commentId: {eq: $commentId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            commentId\n          },\n        },\n      },\n    }\n"): (typeof documents)["\n  query GetVotesByComment($commentId: BigInt!) {\n      comment_votesCollection(filter: {commentId: {eq: $commentId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            commentId\n          },\n        },\n      },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsByPost($first: Int!, $after: Cursor, $postId: BigInt!) {\n      commentsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after, filter: { postId: { eq: $postId } }) {\n        edges {\n          node {\n            id\n            content\n            userId,\n            postId,\n            parentId,\n            created_at,\n            deleted_at,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n"): (typeof documents)["\n  query GetCommentsByPost($first: Int!, $after: Cursor, $postId: BigInt!) {\n      commentsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after, filter: { postId: { eq: $postId } }) {\n        edges {\n          node {\n            id\n            content\n            userId,\n            postId,\n            parentId,\n            created_at,\n            deleted_at,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPosts($first: Int!, $after: Cursor) {\n      postsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n"): (typeof documents)["\n  query GetAllPosts($first: Int!, $after: Cursor) {\n      postsCollection(orderBy:  [{created_at: DescNullsLast}], first: $first, after: $after) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n            cursor\n        },\n        pageInfo {\n            endCursor\n            hasNextPage\n        }\n      },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddPost($userId: UUID!, $content: String!, $image_url: String) {\n    insertIntopostsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            image_url: $image_url\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddPost($userId: UUID!, $content: String!, $image_url: String) {\n    insertIntopostsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            image_url: $image_url\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($id: UUID!, $username: String!, $display_name: String, $avatar_url: String) {\n      updateprofilesCollection(\n          set: {\n              username: $username,\n              display_name: $display_name,\n              avatar_url: $avatar_url,\n          }\n          filter: {id: {eq: $id}}\n      ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($id: UUID!, $username: String!, $display_name: String, $avatar_url: String) {\n      updateprofilesCollection(\n          set: {\n              username: $username,\n              display_name: $display_name,\n              avatar_url: $avatar_url,\n          }\n          filter: {id: {eq: $id}}\n      ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetVotesByPost($postId: BigInt!) {\n      votesCollection(filter: {postId: {eq: $postId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            postId\n          },\n        },\n      },\n    }\n"): (typeof documents)["\n  query GetVotesByPost($postId: BigInt!) {\n      votesCollection(filter: {postId: {eq: $postId}}) {\n        edges {\n          node {\n            id,\n            userId,\n            postId\n          },\n        },\n      },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation VotePost($userId: UUID!, $postId: BigInt!) {\n    insertIntovotesCollection(\n      objects: [\n        {\n          userId: $userId\n          postId: $postId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation VotePost($userId: UUID!, $postId: BigInt!) {\n    insertIntovotesCollection(\n      objects: [\n        {\n          userId: $userId\n          postId: $postId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnvotePost($id: BigInt!) {\n    deleteFromvotesCollection(\n      filter: { id: {eq: $id} }\n    ) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation UnvotePost($id: BigInt!) {\n    deleteFromvotesCollection(\n      filter: { id: {eq: $id} }\n    ) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnvoteComment($voteId: BigInt!) {\n    deleteFromcomment_votesCollection(\n      filter: { id: {eq: $voteId} }\n    ) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation UnvoteComment($voteId: BigInt!) {\n    deleteFromcomment_votesCollection(\n      filter: { id: {eq: $voteId} }\n    ) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpvoteComment($userId: UUID!, $commentId: BigInt!) {\n    insertIntocomment_votesCollection(\n      objects: [\n        {\n          userId: $userId\n          commentId: $commentId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpvoteComment($userId: UUID!, $commentId: BigInt!) {\n    insertIntocomment_votesCollection(\n      objects: [\n        {\n          userId: $userId\n          commentId: $commentId\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddComment($userId: UUID!, $content: String!, $postId: BigInt!, $parentId: BigInt) {\n    insertIntocommentsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            postId: $postId,\n            parentId: $parentId,\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddComment($userId: UUID!, $content: String!, $postId: BigInt!, $parentId: BigInt) {\n    insertIntocommentsCollection(\n      objects: [\n        {\n            userId: $userId,\n            content: $content\n            postId: $postId,\n            parentId: $parentId,\n        }\n      ]\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteComment($commentId: BigInt!, $deleted_at: Datetime!) {\n      updatecommentsCollection(\n        set: { deleted_at: $deleted_at }\n        filter: {id: {eq: $commentId}}\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteComment($commentId: BigInt!, $deleted_at: Datetime!) {\n      updatecommentsCollection(\n        set: { deleted_at: $deleted_at }\n        filter: {id: {eq: $commentId}}\n    ) {\n      affectedCount\n      records {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeletePost($id: BigInt!) {\n      deleteFrompostsCollection(filter: {id: {eq: $id}}) {\n        affectedCount\n        records {\n          id\n        }\n      },\n    }\n"): (typeof documents)["\n    mutation DeletePost($id: BigInt!) {\n      deleteFrompostsCollection(filter: {id: {eq: $id}}) {\n        affectedCount\n        records {\n          id\n        }\n      },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostById($id: BigInt!) {\n      postsCollection(filter: {id: {eq: $id}}) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n        },\n      },\n    }\n"): (typeof documents)["\n  query GetPostById($id: BigInt!) {\n      postsCollection(filter: {id: {eq: $id}}) {\n        edges {\n          node {\n            id\n            content\n            image_url,\n            created_at,\n            userId,\n            user { \n                username, \n                avatar_url,\n            },\n          },\n        },\n      },\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;