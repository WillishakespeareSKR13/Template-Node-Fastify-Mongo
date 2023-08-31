import { Schema, model } from "mongoose";
import * as Interfaces from "./interfaces";
import Plugins from "@/plugins";

const UserSchema = new Schema<Interfaces.IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const UserModel = model<Interfaces.IUser>("User", UserSchema);

export default UserModel;
