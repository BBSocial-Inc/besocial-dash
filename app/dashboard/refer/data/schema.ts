import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  name: z.string().nullable(),
  referrer: z.object({
    _id: z.string(),
    name: z.string().nullable(),
    username: z.string().nullable(),
  }).nullable(),
  username: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;
