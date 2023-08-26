import z from "zod";
import { Template } from "./interfaces";

type ITemplate = z.infer<typeof Template>;

export type InputTemplateById = {
  Params: {
    id: string;
  };
};

export type InputCreateTemplate = {
  Body: Partial<ITemplate>;
};

export type InputUpdateTemplate = {
  Params: {
    id: string;
  };
  Body: Partial<ITemplate>;
};

export type InputDeleteTemplate = {
  Params: {
    id: string;
  };
};
