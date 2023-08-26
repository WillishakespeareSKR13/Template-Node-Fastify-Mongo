import { IUser } from "../../models/user";
import * as Interfaces from "./interfaces";

export type InputUserById = {
  Params: typeof Interfaces.InputUserId["shape"];
};

export type InputCreateUser = {
  Body: typeof Interfaces.InputUser["shape"];
};

export type InputUpdateUser = {
  Params: typeof Interfaces.InputUserId["shape"];
  Body: Partial<IUser>;
};

export type InputDeleteUser = {
  Params: typeof Interfaces.InputUserId["shape"];
};
