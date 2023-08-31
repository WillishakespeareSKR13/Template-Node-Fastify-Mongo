import { Schema, model, models } from "mongoose";
import * as Interfaces from "./interfaces";
import Plugins from "../../plugins";

const TemplateSchema = new Schema<Interfaces.ITemplate>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const TemplateModel =
  models?.Template ?? model<Interfaces.ITemplate>("Template", TemplateSchema);

export default TemplateModel;
