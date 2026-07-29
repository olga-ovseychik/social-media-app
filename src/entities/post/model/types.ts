import type {GetPostByIdQuery, GetAllPostsQuery}  from '@/graphql/graphql'

export type PostNode = NonNullable<GetAllPostsQuery['postsCollection']>['edges'][number]['node']

export type PostItemProps = {
  item: PostNode,
  onPressSettings: () => void,
}