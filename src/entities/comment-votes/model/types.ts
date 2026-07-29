export type CommentVote = {
  id: number,
  userId: string,
  commentId: number
}

export type CommentVotesCache = {
  items: CommentVote[];
}