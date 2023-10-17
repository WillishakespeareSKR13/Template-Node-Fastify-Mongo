import { ICtrl } from "../../types/controller";
import * as ITF from "./interfaces";
import User from "../user/model";
import Utils from "../../utils";
import { IUser } from "../user/interfaces";

export const Login: ICtrl<ITF.OutLogin, ITF.InLogin> = async (req) => {
  const body = req.body;
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const valid = await Utils.Hash.ComparePassword(password, user.password);
  if (!valid) throw new Error("Invalid password");

  const token = Utils.JWT.Sign(user.toJSON());

  return { token };
};

export const Register: ICtrl<ITF.OutRegister, ITF.InRegister> = async (req) => {
  const body = req.body;
  const password = await Utils.Hash.Password(body.password);

  const payload = {
    ...body,
    password,
  };

  const newUser = await User.create(payload);
  const user = newUser.toJSON();
  const token = Utils.JWT.Sign(user);

  return { token };
};

export const Token: ICtrl<ITF.OutToken, ITF.InToken> = async (req) => {
  const { authorization } = req.headers;

  const user = Utils.JWT.Decode(authorization ?? "") as IUser;

  return user;
};

export const RefreshToken: ICtrl<
  ITF.OutRefreshToken,
  ITF.InRefreshToken
> = async (req) => {
  const { authorization } = req.headers;

  const user = Utils.JWT.Decode(authorization ?? "") as IUser;

  const getUser = await User.findById(user.id);
  if (!getUser) throw new Error("User not found");

  const token = Utils.JWT.Sign(getUser.toJSON());

  return { token };
};
