import { ICtrl } from "../../types/controller";
import * as ITF from "./interfaces";
import User from "./model";

export const Get: ICtrl<ITF.OutUsers> = async () => {
  const users = await User.find();
  return users;
};

export const GetById: ICtrl<ITF.OutByIdUser, ITF.InByIdUser> = async (req) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  return user;
};

export const Post: ICtrl<ITF.OutPostUser, ITF.InPostUser> = async (req) => {
  const payload = req.body;

  const user = await User.create(payload);
  return user;
};

export const Update: ICtrl<ITF.OutUpUser, ITF.InUpUser> = async (req) => {
  const { id } = req.params;
  const payload = req.body;

  const user = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!user) throw new Error("User not found");

  return user;
};

export const Delete: ICtrl<ITF.OutDelUser, ITF.InDelUser> = async (req) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");

  return user;
};
