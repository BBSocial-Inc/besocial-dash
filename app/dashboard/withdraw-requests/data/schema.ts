import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string().optional(),
  name: z.string().optional(),
  email_admin: z.string().optional(),
  username: z.string().optional(),
  auth_type_admin: z.string().optional(),
  birthday_admin: z.string().optional(),
  created_at: z.string().optional(),
  platform: z.string(),
  country: z.string(),
  numberOfContents: z.any(),
  numberOfHashtags: z.any(),
  viewsCount: z.any(),
  referredUsersCount: z.any(),
  is_blocked: z.any(),
  bs_pin: z.any(),
});

export type Task = z.infer<typeof taskSchema>;
