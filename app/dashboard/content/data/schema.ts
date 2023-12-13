import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  caption: z.string(),
  content_url: z.string(),
  thumbnail_url: z.string(),
  hashtags: z.array(
    z.object({
      _id: z.string(),
      text: z.string(),
    })
  ),
  creator: z.object({
    _id: z.string(),
    username: z.string(),
  }),

  likes: z.number(),
  number_of_comments: z.number(),
  views: z.number(),
  created_at: z.any(),
});

export type Task = z.infer<typeof taskSchema>;
