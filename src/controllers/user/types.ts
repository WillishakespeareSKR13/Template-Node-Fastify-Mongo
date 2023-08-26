import { IUser } from "../../models/user";
import { InputUser, InputUserId } from "./interfaces";

export type InputUserById = {
  Params: typeof InputUserId["shape"];
};

export type InputCreateUser = {
  Body: typeof InputUser["shape"];
};

export type InputUpdateUser = {
  Params: typeof InputUserId["shape"];
  Body: Partial<IUser>;
};

export type InputDeleteUser = {
  Params: typeof InputUserId["shape"];
};
