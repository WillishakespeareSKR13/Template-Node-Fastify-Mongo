import { IController } from "../../types/controller";
import * as Interfaces from "./interfaces";
import Template from "./model";

export const Get: IController<Interfaces.OutputTemplates> = async () => {
  const templates = await Template.find();
  return templates;
};

export const GetById: IController<
  Interfaces.OutputByIdTemplate,
  Interfaces.InputByIdTemplate
> = async (req) => {
  const { id } = req.params;

  const template = await Template.findById(id);
  if (!template) throw new Error("Template not found");

  return template;
};

export const Post: IController<
  Interfaces.OutputPostTemplate,
  Interfaces.InputPostTemplate
> = async (req) => {
  const payload = req.body;

  const template = await Template.create(payload);
  return template;
};

export const Update: IController<
  Interfaces.OutputUpdateTemplate,
  Interfaces.InputUpdateTemplate
> = async (req) => {
  const { id } = req.params;
  const payload = req.body;

  const template = await Template.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!template) throw new Error("Template not found");

  return template;
};

export const Delete: IController<
  Interfaces.OutputDeleteTemplate,
  Interfaces.InputDeleteTemplate
> = async (req) => {
  const { id } = req.params;

  const template = await Template.findByIdAndDelete(id);
  if (!template) throw new Error("Template not found");

  return template;
};
