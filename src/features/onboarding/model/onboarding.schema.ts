import * as z from "zod"

export const schema = z.object({
  username: z.string().min(2),
  display_name: z.string().optional().nullable(),
  avatar_url: z.string().optional().nullable(),
})

export type FormData = z.infer<typeof schema>