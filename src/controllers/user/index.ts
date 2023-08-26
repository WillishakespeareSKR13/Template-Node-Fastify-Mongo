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

  const get_user = await User.findById(id);
  if (!get_user) throw new Error("User not found");

  const user = get_user.toJSON();
  return user;
};

export const Create: IController = async (req) => {
  const body = req.body as Types.InputCreateUser["Body"];
  const password = await Utils.Hash.Password(body.password);

  const payload = {
    ...body,
    password,
  };

  const new_user = await User.create(payload);

  const user = new_user.toJSON();
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

  const update_user = await User.findByIdAndUpdate(id, payload);
  if (!update_user) throw new Error("User not found");

  const user = update_user.toJSON();
  return user;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteUser["Params"];

  const user_delete = await User.findByIdAndDelete(id);
  if (!user_delete) throw new Error("User not found");

  const user = user_delete.toJSON();
  return user;
};

export * as Types from "./types";
export * as Schema from "./schema";
