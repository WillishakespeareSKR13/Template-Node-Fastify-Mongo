import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Roles = z.enum(["ADMIN", "USER"]);
export const User = z.object({
  id: z.string(),
  name: z.string(),
  lastname: z.string(),
  birthday: z.string(),
  email: z.string(),
  phone: z.string(),
  phone_code: z.string(),
  password: z.string(),
  role: Roles,
  token: z.string(),
  active: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type IUser = z.infer<typeof User>;

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    token: { type: String, default: "" },
    phone_code: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER" },
    active: { type: Boolean, default: true },
  },
  Plugins.Mongo.Normalize()
);

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
