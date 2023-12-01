import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string().optional(),
  is_read: z.boolean().optional(),
  message: z.string().optional(),
  report_type: z.string().optional(),
  reported_by: z
    .object({
      _id: z.string().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
      __typename: z.string().optional(),
    })
    .optional(),
  action: z.string().optional(),
  action_at: z.string().optional(),
  report_id: z.string().optional(),
});

export type Task = z.infer<typeof taskSchema>;
