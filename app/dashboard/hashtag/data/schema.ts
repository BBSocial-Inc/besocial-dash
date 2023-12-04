import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string().optional(),
  text: z.string().optional(),
  posts: z.number().optional(),
  rank: z.number().optional(),
  followers: z.number().optional(),
  contentViews: z.number().optional(),
  total_contents: z.number().optional(),
  creator: z
    .object({
      _id: z.string().optional(),
      name: z.string().optional(),
    })
    .optional(),
  owner: z
    .object({
      _id: z.string().optional(),
      name: z.string().optional(),
    })
    .optional(),
});

export type Task = z.infer<typeof taskSchema>;
