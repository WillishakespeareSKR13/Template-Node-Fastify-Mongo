import User from "../../models/user";
import { IController } from "../../types/controller";
import Utils from "../../utils";

import * as Types from "./types";

export const Get: IController = async () => {
  const users = await User.find();
  return users;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputUserById["Params"];

  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  return user;
};

export const Create: IController = async (req) => {
  const body = req.body as Types.InputCreateUser["Body"];
  const password = await Utils.Hash.Password(body.password);

  const payload = {
    ...body,
    password,
  };

  const user = await User.create(payload);

  return user;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateUser["Params"];
  const body = req.body as Types.InputUpdateUser["Body"];

  const updatePassword = async () => {
    if (!body.password) return {};
    const password = await Utils.Hash.Password(body.password);
    return { password };
  };

  const password = await updatePassword();

  const payload = {
    ...body,
    ...password,
  };

  const user = await User.findByIdAndUpdate(id, payload);
  if (!user) throw new Error("User not found");

  return user;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteUser["Params"];

  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");

  return user;
};

export * as Types from "./types";
export * as Schema from "./schema";
