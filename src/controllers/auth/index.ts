import User from "../../models/user";
import { IController } from "../../types/controller";
import Utils from "../../utils";
import * as Types from "./types";

export const Login: IController = async (req) => {
  const body = req.body as Types.InputAuthLogin["Body"];
  const { email = "", phone = "", password } = body;

  if (!email && !phone) throw new Error("Email or phone is required");

  const get_user = await User.findOne({ $or: [{ email }, { phone }] });
  if (!get_user) throw new Error("User not found");

  const user = get_user.toJSON();

  const valid = await Utils.Hash.ComparePassword(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const token = Utils.JWT.Sign(user);

  return { token };
};

export const Register: IController = async (req) => {
  const body = req.body as Types.InputAuthRegister["Body"];
  const password = await Utils.Hash.Password(body.password);

  const payload = {
    ...body,
    password,
  };

  const new_user = await User.create(payload);
  const user = new_user.toJSON();
  const token = Utils.JWT.Sign(user);

  return { token };
};

export const Token: IController = async (req) => {
  const header = req.headers as unknown as Types.InputAuthToken["Headers"];

  const user = Utils.JWT.Decode(header?.authorization);
  return user;
};

export * as Types from "./types";
export * as Schema from "./schema";
