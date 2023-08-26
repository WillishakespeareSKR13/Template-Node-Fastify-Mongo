import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to template endpoint",
  tags: ["templates"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputTemplate.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to template endpoint",
  tags: ["templates"],
  summary: "Get By Id Method",
  params: Interfaces.InputTemplateId,
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Create = {
  description: "This is the method post to template endpoint",
  tags: ["templates"],
  summary: "Post Method",
  body: Interfaces.InputTemplate,
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Update = {
  description: "This is the method update to template endpoint",
  tags: ["templates"],
  summary: "Update Method",
  params: Interfaces.InputTemplateId,
  body: Interfaces.InputTemplate.partial(),
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Delete = {
  description: "This is the method delete to template endpoint",
  tags: ["templates"],
  summary: "Delete Method",
  params: Interfaces.InputTemplateId,
  response: {
    200: Interfaces.OutputTemplate,
  },
};
