import { ICtrl } from "../../types/controller";
import * as ITF from "./interfaces";
import Template from "./model";

export const Get: ICtrl<ITF.OutTemplates> = async () => {
  const templates = await Template.find();
  return templates;
};

export const GetById: ICtrl<ITF.OutByIdTemplate, ITF.InByIdTemplate> = async (
  req
) => {
  const { id } = req.params;

  const template = await Template.findById(id);
  if (!template) throw new Error("Template not found");

  return template;
};

export const Post: ICtrl<ITF.OutPostTemplate, ITF.InPostTemplate> = async (
  req
) => {
  const payload = req.body;

  const template = await Template.create(payload);
  return template;
};

export const Update: ICtrl<ITF.OutUpTemplate, ITF.InUpTemplate> = async (
  req
) => {
  const { id } = req.params;
  const payload = req.body;

  const template = await Template.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!template) throw new Error("Template not found");

  return template;
};

export const Delete: ICtrl<ITF.OutDelTemplate, ITF.InDelTemplate> = async (
  req
) => {
  const { id } = req.params;

  const template = await Template.findByIdAndDelete(id);
  if (!template) throw new Error("Template not found");

  return template;
};
