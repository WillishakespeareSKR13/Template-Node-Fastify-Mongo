import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to Template endpoint",
  tags: ["Template"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputTemplates,
  },
};

export const GetById = {
  description: "This is the method get by id to Template endpoint",
  tags: ["Template"],
  summary: "GetById Method",
  params: Interfaces.InputTemplateId,
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Post = {
  description: "This is the method post to Template endpoint",
  tags: ["Template"],
  summary: "Post Method",
  body: Interfaces.InputTemplate,
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Update = {
  description: "This is the method put to Template endpoint",
  tags: ["Template"],
  summary: "Update Method",
  params: Interfaces.InputTemplateId,
  body: Interfaces.InputTemplate,
  response: {
    200: Interfaces.OutputTemplate,
  },
};

export const Delete = {
  description: "This is the method delete to Template endpoint",
  tags: ["Template"],
  summary: "Delete Method",
  params: Interfaces.InputTemplateId,
  response: {
    200: Interfaces.OutputTemplate,
  },
};
