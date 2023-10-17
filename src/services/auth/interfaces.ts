import { z } from "zod";
import { User } from "../user/interfaces";

export const Token = z.object({
  token: z.string(),
});

export const InHeaders = z.object({
  authorization: z.string().optional(),
});

export const InLogin = User.pick({
  email: true,
  password: true,
});

export const InRegister = User.omit({
  id: true,
});

export const OutLogin = Token;
export const OutRegister = Token;
export const OutToken = User;
export const OutRefreshToken = Token;

export type IToken = z.infer<typeof Token>;

export type OutLogin = z.infer<typeof OutLogin>;
export type OutRegister = z.infer<typeof OutRegister>;
export type OutToken = z.infer<typeof OutToken>;
export type OutRefreshToken = z.infer<typeof OutRefreshToken>;

export type InLogin = {
  body: z.infer<typeof InLogin>;
};

export type InRegister = {
  body: z.infer<typeof InRegister>;
};

export type InToken = {
  headers: z.infer<typeof InHeaders>;
};

export type InRefreshToken = {
  headers: z.infer<typeof InHeaders>;
};
