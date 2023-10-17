import { Schema, model, models } from "mongoose";
import * as ITF from "./interfaces";
import Plugins from "../../plugins";

const TemplateSchema = new Schema<ITF.ITemplate>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const TemplateModel =
  models?.Template ?? model<ITF.ITemplate>("Template", TemplateSchema);

export default TemplateModel;
