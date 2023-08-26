import { IUser } from "../../models/user";
import * as Interfaces from "./interfaces";

export type InputUserById = {
  Params: typeof Interfaces.InputUserId["_type"];
};

export type InputCreateUser = {
  Body: typeof Interfaces.InputUser["_type"];
};

export type InputUpdateUser = {
  Params: typeof Interfaces.InputUserId["_type"];
  Body: Partial<IUser>;
};

export type InputDeleteUser = {
  Params: typeof Interfaces.InputUserId["_type"];
};
