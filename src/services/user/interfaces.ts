import { z } from "zod";

export const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const InUser = User.omit({
  id: true,
});

export const InUserId = User.pick({
  id: true,
});

export const OutUsers = User.array();
export const OutUser = User;

export type IUser = z.infer<typeof User>;

export type InByIdUser = {
  params: z.infer<typeof InUserId>;
};

export type InPostUser = {
  body: z.infer<typeof InUser>;
};

export type InUpUser = {
  params: z.infer<typeof InUserId>;
  body: z.infer<typeof InUser>;
};

export type InDelUser = {
  params: z.infer<typeof InUserId>;
};

export type OutUsers = z.infer<typeof OutUsers>;
export type OutByIdUser = z.infer<typeof OutUser>;
export type OutPostUser = z.infer<typeof OutUser>;
export type OutUpUser = z.infer<typeof OutUser>;
export type OutDelUser = z.infer<typeof OutUser>;
