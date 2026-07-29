import * as z from "zod"

export const authSchema = z.object({
  email: z
    .email()
    .trim(),
  password: z.string().min(6)
})

export type AuthFormData = z.infer<typeof authSchema>