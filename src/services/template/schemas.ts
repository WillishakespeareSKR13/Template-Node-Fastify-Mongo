import * as ITF from "./interfaces";

export const Get = {
  description: "This is the method get to Template endpoint",
  tags: ["Template"],
  summary: "Get Method",
  response: {
    200: ITF.OutTemplates,
  },
};

export const GetById = {
  description: "This is the method get by id to Template endpoint",
  tags: ["Template"],
  summary: "GetById Method",
  params: ITF.InTemplateId,
  response: {
    200: ITF.OutTemplate,
  },
};

export const Post = {
  description: "This is the method post to Template endpoint",
  tags: ["Template"],
  summary: "Post Method",
  body: ITF.InTemplate,
  response: {
    200: ITF.OutTemplate,
  },
};

export const Up = {
  description: "This is the method put to Template endpoint",
  tags: ["Template"],
  summary: "Up Method",
  params: ITF.InTemplateId,
  body: ITF.InTemplate,
  response: {
    200: ITF.OutTemplate,
  },
};

export const Del = {
  description: "This is the method delete to Template endpoint",
  tags: ["Template"],
  summary: "Del Method",
  params: ITF.InTemplateId,
  response: {
    200: ITF.OutTemplate,
  },
};
