import * as Interfaces from "./interfaces";

export type InputTemplateById = {
  Params: typeof Interfaces.InputTemplateId["_type"];
};

export type InputCreateTemplate = {
  Body: typeof Interfaces.InputTemplate["_type"];
};

export type InputUpdateTemplate = {
  Params: typeof Interfaces.InputTemplateId["_type"];
  Body: Partial<typeof Interfaces.InputTemplate["_type"]>;
};

export type InputDeleteTemplate = {
  Params: typeof Interfaces.InputTemplateId["_type"];
};
