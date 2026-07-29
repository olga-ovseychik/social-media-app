import * as z from "zod"

export const schema = z.object({
  content: z
    .string()
    .trim()
    .refine(
      (val) => !val || val.length >= 2,
      { message: "Text must be at least 2 characters" }
    )
    .refine(val => !val || val.length <= 255,
      { message: "Text must be less than 255 characters" }
    ),
})

export type FormData = z.infer<typeof schema>