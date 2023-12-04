import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  name: z.string().optional(),
  card_type: z.string().optional(),
  description: z.string().optional(),
  posts: z.number().optional(),
  is_active: z.boolean().optional(),
  text: z.string().optional(),
  rank: z.number().optional(),
  total_contents: z.number().optional(),
});

export type Task = z.infer<typeof taskSchema>;
