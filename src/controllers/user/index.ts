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

  const user = {
    ...body,
    password,
  };

  const new_user = await User.create(user);
  return new_user;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateUser["Params"];
  const body = req.body as Types.InputUpdateUser["Body"];

  const find_user = await User.findById(id);
  if (!find_user) throw new Error("User not found");

  const updatePassword = async () => {
    if (!body.password) return {};
    const password = await Utils.Hash.Password(body.password);
    return { password };
  };

  const password = await updatePassword();

  const user = {
    ...body,
    ...password,
  };

  const update_user = await User.findByIdAndUpdate(id, user);
  return update_user;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteUser["Params"];

  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  const user_delete = await User.findByIdAndDelete(id);
  return user_delete;
};

export * as Types from "./types";
export * as Schema from "./schema";
