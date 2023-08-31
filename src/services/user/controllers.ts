import { IController } from "@/types/controller";
import * as Interfaces from "./interfaces";
import User from "./model";

export const Get: IController<Interfaces.OutputUsers> = async () => {
  const users = await User.find();
  return users;
};

export const GetById: IController<
  Interfaces.OutputByIdUser,
  Interfaces.InputByIdUser
> = async (req) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  return user;
};

export const Post: IController<
  Interfaces.OutputPostUser,
  Interfaces.InputPostUser
> = async (req) => {
  const payload = req.body;

  const user = await User.create(payload);
  return user;
};

export const Update: IController<
  Interfaces.OutputUpdateUser,
  Interfaces.InputUpdateUser
> = async (req) => {
  const { id } = req.params;
  const payload = req.body;

  const user = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!user) throw new Error("User not found");

  return user;
};

export const Delete: IController<
  Interfaces.OutputDeleteUser,
  Interfaces.InputDeleteUser
> = async (req) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");

  return user;
};
