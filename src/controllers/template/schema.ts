import { z } from "zod";
import { InputTemplate, InputTemplateId, OutputTemplate } from "./interfaces";

export const Get = {
  description: "This is the method get to template endpoint",
  tags: ["templates"],
  summary: "Get Method",
  response: {
    200: OutputTemplate.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to template endpoint",
  tags: ["templates"],
  summary: "Get By Id Method",
  params: InputTemplateId,
  response: {
    200: OutputTemplate,
  },
};

export const Create = {
  description: "This is the method post to template endpoint",
  tags: ["templates"],
  summary: "Post Method",
  body: InputTemplateId,
  response: {
    200: OutputTemplate,
  },
};

export const Update = {
  description: "This is the method update to template endpoint",
  tags: ["templates"],
  summary: "Update Method",
  params: InputTemplateId,
  body: InputTemplate.partial(),
  response: {
    200: OutputTemplate,
  },
};

export const Delete = {
  description: "This is the method delete to template endpoint",
  tags: ["templates"],
  summary: "Delete Method",
  params: InputTemplateId,
  response: {
    200: OutputTemplate,
  },
};
