import { z } from "zod";
import { User } from "../user/interfaces";

export const Token = z.object({
  token: z.string(),
});

export const InputHeaders = z.object({
  authorization: z.string().optional(),
});

export const InputLogin = User.pick({
  email: true,
  password: true,
});

export const InputRegister = User.omit({
  id: true,
});

export const OutputLogin = Token;
export const OutputRegister = Token;
export const OutputToken = User;
export const OutputRefreshToken = Token;

export type IToken = z.infer<typeof Token>;

export type OutputLogin = z.infer<typeof OutputLogin>;
export type OutputRegister = z.infer<typeof OutputRegister>;
export type OutputToken = z.infer<typeof OutputToken>;
export type OutputRefreshToken = z.infer<typeof OutputRefreshToken>;

export type InputLogin = {
  body: z.infer<typeof InputLogin>;
};

export type InputRegister = {
  body: z.infer<typeof InputRegister>;
};

export type InputToken = {
  headers: z.infer<typeof InputHeaders>;
};

export type InputRefreshToken = {
  headers: z.infer<typeof InputHeaders>;
};
