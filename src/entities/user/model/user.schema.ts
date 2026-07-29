import * as z from "zod"

export const userSchema = z.object({
  id: z.string(),
  display_name: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  avatar_url: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
})

export type User = z.infer<typeof userSchema>