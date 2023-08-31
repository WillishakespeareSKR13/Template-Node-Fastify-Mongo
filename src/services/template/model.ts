import { Schema, model } from "mongoose";
import * as Interfaces from "./interfaces";
import Plugins from "@/plugins";

const TemplateSchema = new Schema<Interfaces.ITemplate>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const TemplateModel = model<Interfaces.ITemplate>("Template", TemplateSchema);

export default TemplateModel;
