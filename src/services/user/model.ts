import { Schema, model, models } from "mongoose";
import * as ITF from "./interfaces";
import Plugins from "../../plugins";

const UserSchema = new Schema<ITF.IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const UserModel = models?.User ?? model<ITF.IUser>("User", UserSchema);

export default UserModel;
