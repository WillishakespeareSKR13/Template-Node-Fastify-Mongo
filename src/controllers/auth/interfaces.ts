import { z } from "zod";
import { User } from "../../models/user";
import * as UserInterface from "../user/interfaces";

export const Auth = User.pick({
  token: true,
});

export const InputAuthLogin = User.pick({
  email: true,
  phone: true,
  password: true,
}).merge(
  z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
  })
);

export const InputAuthRegister = UserInterface.InputUser;

export const InputAuthToken = z.object({
  authorization: z.string(),
});

export const OutputAuth = Auth;

export const OutputAuthToken = UserInterface.OutputUser;
