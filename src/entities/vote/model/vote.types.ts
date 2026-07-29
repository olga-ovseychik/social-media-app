export type Vote = {
  id: number,
  userId: string,
  postId: number
}

export type VotesCache = {
  items: Vote[];
}