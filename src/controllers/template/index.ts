import { IController } from "../../types/controller";
import * as Types from "./types";

export const Get: IController = async () => {
  const message = {
    message: "Hello World",
    messagePrivate: "Hello World",
  };
  const data = Array.from({ length: 10 }, () => message);
  return data;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputTemplateById["Params"];
  const data = {
    message: `Hello World ${id}`,
    messagePrivate: `Hello World ${id}`,
  };
  return data;
};

export const Create: IController = async (req) => {
  const body = req.body as Types.InputCreateTemplate["Body"];
  const data = {
    ...body,
  };
  return data;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateTemplate["Params"];
  const body = req.body as Types.InputUpdateTemplate["Body"];
  const data = {
    message: `${body.message} ${id}`,
    messagePrivate: `${body.messagePrivate} ${id}`,
  };
  return data;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteTemplate["Params"];
  const data = {
    message: `Hello World ${id}`,
    messagePrivate: `Hello World ${id}`,
  };
  return data;
};

export * as Types from "./types";
export * as Schema from "./schema";
