import * as Interfaces from "./interfaces";

export type InputTemplateById = {
  Params: typeof Interfaces.InputTemplateId["shape"];
};

export type InputCreateTemplate = {
  Body: typeof Interfaces.InputTemplate["shape"];
};

export type InputUpdateTemplate = {
  Params: typeof Interfaces.InputTemplateId["shape"];
  Body: Partial<typeof Interfaces.InputTemplate["shape"]>;
};

export type InputDeleteTemplate = {
  Params: typeof Interfaces.InputTemplateId["shape"];
};
