import { z } from "zod";

export const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const InputUser = User.omit({
  id: true,
});

export const InputUserId = User.pick({
  id: true,
});

export const OutputUsers = User.array();
export const OutputUser = User;

export type IUser = z.infer<typeof User>;

export type InputByIdUser = {
  params: z.infer<typeof InputUserId>;
};

export type InputPostUser = {
  body: z.infer<typeof InputUser>;
};

export type InputUpdateUser = {
  params: z.infer<typeof InputUserId>;
  body: z.infer<typeof InputUser>;
};

export type InputDeleteUser = {
  params: z.infer<typeof InputUserId>;
};

export type OutputUsers = z.infer<typeof OutputUsers>;
export type OutputByIdUser = z.infer<typeof OutputUser>;
export type OutputPostUser = z.infer<typeof OutputUser>;
export type OutputUpdateUser = z.infer<typeof OutputUser>;
export type OutputDeleteUser = z.infer<typeof OutputUser>;
