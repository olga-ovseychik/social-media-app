/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `comment_votes` collection */
  deleteFromcomment_votesCollection: Comment_VotesDeleteResponse;
  /** Deletes zero or more records from the `comments` collection */
  deleteFromcommentsCollection: CommentsDeleteResponse;
  /** Deletes zero or more records from the `posts` collection */
  deleteFrompostsCollection: PostsDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `votes` collection */
  deleteFromvotesCollection: VotesDeleteResponse;
  /** Adds one or more `comment_votes` records to the collection */
  insertIntocomment_votesCollection?: Maybe<Comment_VotesInsertResponse>;
  /** Adds one or more `comments` records to the collection */
  insertIntocommentsCollection?: Maybe<CommentsInsertResponse>;
  /** Adds one or more `posts` records to the collection */
  insertIntopostsCollection?: Maybe<PostsInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `votes` records to the collection */
  insertIntovotesCollection?: Maybe<VotesInsertResponse>;
  /** Updates zero or more records in the `comment_votes` collection */
  updatecomment_votesCollection: Comment_VotesUpdateResponse;
  /** Updates zero or more records in the `comments` collection */
  updatecommentsCollection: CommentsUpdateResponse;
  /** Updates zero or more records in the `posts` collection */
  updatepostsCollection: PostsUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `votes` collection */
  updatevotesCollection: VotesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcomment_VotesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Comment_VotesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcommentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CommentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompostsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PostsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromvotesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VotesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocomment_VotesCollectionArgs = {
  objects: Array<Comment_VotesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocommentsCollectionArgs = {
  objects: Array<CommentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopostsCollectionArgs = {
  objects: Array<PostsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntovotesCollectionArgs = {
  objects: Array<VotesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatecomment_VotesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Comment_VotesFilter>;
  set: Comment_VotesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecommentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CommentsFilter>;
  set: CommentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepostsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PostsFilter>;
  set: PostsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatevotesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VotesFilter>;
  set: VotesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `comment_votes` */
  comment_votesCollection?: Maybe<Comment_VotesConnection>;
  /** A pagable collection of type `comments` */
  commentsCollection?: Maybe<CommentsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `posts` */
  postsCollection?: Maybe<PostsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `votes` */
  votesCollection?: Maybe<VotesConnection>;
};


/** The root type for querying data */
export type QueryComment_VotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Comment_VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Comment_VotesOrderBy>>;
};


/** The root type for querying data */
export type QueryCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};


/** The root type for querying data */
export type QueryVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VotesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Comment_Votes = Node & {
  __typename?: 'comment_votes';
  comment?: Maybe<Comments>;
  commentId?: Maybe<Scalars['BigInt']['output']>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type Comment_VotesConnection = {
  __typename?: 'comment_votesConnection';
  edges: Array<Comment_VotesEdge>;
  pageInfo: PageInfo;
};

export type Comment_VotesDeleteResponse = {
  __typename?: 'comment_votesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comment_Votes>;
};

export type Comment_VotesEdge = {
  __typename?: 'comment_votesEdge';
  cursor: Scalars['String']['output'];
  node: Comment_Votes;
};

export type Comment_VotesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Comment_VotesFilter>>;
  commentId?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Comment_VotesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Comment_VotesFilter>>;
  userId?: InputMaybe<UuidFilter>;
};

export type Comment_VotesInsertInput = {
  commentId?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Comment_VotesInsertResponse = {
  __typename?: 'comment_votesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comment_Votes>;
};

export type Comment_VotesOrderBy = {
  commentId?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type Comment_VotesUpdateInput = {
  commentId?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Comment_VotesUpdateResponse = {
  __typename?: 'comment_votesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comment_Votes>;
};

export type Comments = Node & {
  __typename?: 'comments';
  comment_votesCollection?: Maybe<Comment_VotesConnection>;
  commentsCollection?: Maybe<CommentsConnection>;
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  deleted_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parent?: Maybe<Comments>;
  parentId?: Maybe<Scalars['BigInt']['output']>;
  post?: Maybe<Posts>;
  postId: Scalars['BigInt']['output'];
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']['output']>;
};


export type CommentsComment_VotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Comment_VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Comment_VotesOrderBy>>;
};


export type CommentsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type CommentsConnection = {
  __typename?: 'commentsConnection';
  edges: Array<CommentsEdge>;
  pageInfo: PageInfo;
};

export type CommentsDeleteResponse = {
  __typename?: 'commentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type CommentsEdge = {
  __typename?: 'commentsEdge';
  cursor: Scalars['String']['output'];
  node: Comments;
};

export type CommentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CommentsFilter>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deleted_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CommentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CommentsFilter>>;
  parentId?: InputMaybe<BigIntFilter>;
  postId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type CommentsInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  parentId?: InputMaybe<Scalars['BigInt']['input']>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CommentsInsertResponse = {
  __typename?: 'commentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type CommentsOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deleted_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  parentId?: InputMaybe<OrderByDirection>;
  postId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type CommentsUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  deleted_at?: InputMaybe<Scalars['Datetime']['input']>;
  parentId?: InputMaybe<Scalars['BigInt']['input']>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CommentsUpdateResponse = {
  __typename?: 'commentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type Posts = Node & {
  __typename?: 'posts';
  commentsCollection?: Maybe<CommentsConnection>;
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']['output']>;
  votesCollection?: Maybe<VotesConnection>;
};


export type PostsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


export type PostsVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VotesOrderBy>>;
};

export type PostsConnection = {
  __typename?: 'postsConnection';
  edges: Array<PostsEdge>;
  pageInfo: PageInfo;
};

export type PostsDeleteResponse = {
  __typename?: 'postsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsEdge = {
  __typename?: 'postsEdge';
  cursor: Scalars['String']['output'];
  node: Posts;
};

export type PostsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PostsFilter>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PostsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PostsFilter>>;
  userId?: InputMaybe<UuidFilter>;
};

export type PostsInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PostsInsertResponse = {
  __typename?: 'postsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type PostsUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type PostsUpdateResponse = {
  __typename?: 'postsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type Profiles = Node & {
  __typename?: 'profiles';
  avatar_url?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  comment_votesCollection?: Maybe<Comment_VotesConnection>;
  commentsCollection?: Maybe<CommentsConnection>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  postsCollection?: Maybe<PostsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  votesCollection?: Maybe<VotesConnection>;
};


export type ProfilesComment_VotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Comment_VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Comment_VotesOrderBy>>;
};


export type ProfilesCommentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


export type ProfilesPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


export type ProfilesVotesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<VotesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VotesOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'profilesEdge';
  cursor: Scalars['String']['output'];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  avatar_url?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  bio?: InputMaybe<OrderByDirection>;
  display_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type Votes = Node & {
  __typename?: 'votes';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  post?: Maybe<Posts>;
  postId?: Maybe<Scalars['BigInt']['output']>;
  user?: Maybe<Profiles>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type VotesConnection = {
  __typename?: 'votesConnection';
  edges: Array<VotesEdge>;
  pageInfo: PageInfo;
};

export type VotesDeleteResponse = {
  __typename?: 'votesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Votes>;
};

export type VotesEdge = {
  __typename?: 'votesEdge';
  cursor: Scalars['String']['output'];
  node: Votes;
};

export type VotesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<VotesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<VotesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<VotesFilter>>;
  postId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type VotesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type VotesInsertResponse = {
  __typename?: 'votesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Votes>;
};

export type VotesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  postId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type VotesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  postId?: InputMaybe<Scalars['BigInt']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type VotesUpdateResponse = {
  __typename?: 'votesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Votes>;
};

export type GetVotesByCommentQueryVariables = Exact<{
  commentId: Scalars['BigInt']['input'];
}>;


export type GetVotesByCommentQuery = { __typename?: 'Query', comment_votesCollection?: { __typename?: 'comment_votesConnection', edges: Array<{ __typename?: 'comment_votesEdge', node: { __typename?: 'comment_votes', id: any, userId?: any | null, commentId?: any | null } }> } | null };

export type GetCommentsByPostQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
  postId: Scalars['BigInt']['input'];
}>;


export type GetCommentsByPostQuery = { __typename?: 'Query', commentsCollection?: { __typename?: 'commentsConnection', edges: Array<{ __typename?: 'commentsEdge', cursor: string, node: { __typename?: 'comments', id: any, content?: string | null, userId?: any | null, postId: any, parentId?: any | null, created_at: any, deleted_at?: any | null, user?: { __typename?: 'profiles', username?: string | null, avatar_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetAllPostsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetAllPostsQuery = { __typename?: 'Query', postsCollection?: { __typename?: 'postsConnection', edges: Array<{ __typename?: 'postsEdge', cursor: string, node: { __typename?: 'posts', id: any, content?: string | null, image_url?: string | null, created_at: any, userId?: any | null, user?: { __typename?: 'profiles', username?: string | null, avatar_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type AddPostMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  image_url?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddPostMutation = { __typename?: 'Mutation', insertIntopostsCollection?: { __typename?: 'postsInsertResponse', affectedCount: number, records: Array<{ __typename?: 'posts', id: any }> } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  username: Scalars['String']['input'];
  display_name?: InputMaybe<Scalars['String']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateprofilesCollection: { __typename?: 'profilesUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'profiles', id: any }> } };

export type GetVotesByPostQueryVariables = Exact<{
  postId: Scalars['BigInt']['input'];
}>;


export type GetVotesByPostQuery = { __typename?: 'Query', votesCollection?: { __typename?: 'votesConnection', edges: Array<{ __typename?: 'votesEdge', node: { __typename?: 'votes', id: any, userId?: any | null, postId?: any | null } }> } | null };

export type VotePostMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  postId: Scalars['BigInt']['input'];
}>;


export type VotePostMutation = { __typename?: 'Mutation', insertIntovotesCollection?: { __typename?: 'votesInsertResponse', affectedCount: number, records: Array<{ __typename?: 'votes', id: any }> } | null };

export type UnvotePostMutationVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type UnvotePostMutation = { __typename?: 'Mutation', deleteFromvotesCollection: { __typename?: 'votesDeleteResponse', affectedCount: number } };

export type UnvoteCommentMutationVariables = Exact<{
  voteId: Scalars['BigInt']['input'];
}>;


export type UnvoteCommentMutation = { __typename?: 'Mutation', deleteFromcomment_votesCollection: { __typename?: 'comment_votesDeleteResponse', affectedCount: number } };

export type UpvoteCommentMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  commentId: Scalars['BigInt']['input'];
}>;


export type UpvoteCommentMutation = { __typename?: 'Mutation', insertIntocomment_votesCollection?: { __typename?: 'comment_votesInsertResponse', affectedCount: number, records: Array<{ __typename?: 'comment_votes', id: any }> } | null };

export type AddCommentMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['BigInt']['input'];
  parentId?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', insertIntocommentsCollection?: { __typename?: 'commentsInsertResponse', affectedCount: number, records: Array<{ __typename?: 'comments', id: any }> } | null };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['BigInt']['input'];
  deleted_at: Scalars['Datetime']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', updatecommentsCollection: { __typename?: 'commentsUpdateResponse', affectedCount: number, records: Array<{ __typename?: 'comments', id: any }> } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deleteFrompostsCollection: { __typename?: 'postsDeleteResponse', affectedCount: number, records: Array<{ __typename?: 'posts', id: any }> } };

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', postsCollection?: { __typename?: 'postsConnection', edges: Array<{ __typename?: 'postsEdge', node: { __typename?: 'posts', id: any, content?: string | null, image_url?: string | null, created_at: any, userId?: any | null, user?: { __typename?: 'profiles', username?: string | null, avatar_url?: string | null } | null } }> } | null };


export const GetVotesByCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVotesByComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment_votesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"commentId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVotesByCommentQuery, GetVotesByCommentQueryVariables>;
export const GetCommentsByPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsByPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsByPostQuery, GetCommentsByPostQueryVariables>;
export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const AddPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntopostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"image_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddPostMutation, AddPostMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"display_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateprofilesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"display_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"avatar_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar_url"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetVotesByPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVotesByPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVotesByPostQuery, GetVotesByPostQueryVariables>;
export const VotePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VotePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntovotesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<VotePostMutation, VotePostMutationVariables>;
export const UnvotePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnvotePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFromvotesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UnvotePostMutation, UnvotePostMutationVariables>;
export const UnvoteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnvoteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"voteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFromcomment_votesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"voteId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UnvoteCommentMutation, UnvoteCommentMutationVariables>;
export const UpvoteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpvoteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntocomment_votesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpvoteCommentMutation, UpvoteCommentMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntocommentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleted_at"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatecommentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deleted_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleted_at"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFrompostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const GetPostByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;