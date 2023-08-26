import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to user endpoint",
  tags: ["users"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputUser.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to user endpoint",
  tags: ["users"],
  summary: "Get By Id Method",
  params: Interfaces.InputUserId,
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Create = {
  description: "This is the method post to user endpoint",
  tags: ["users"],
  summary: "Post Method",
  body: Interfaces.InputUser,
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Update = {
  description: "This is the method update to user endpoint",
  tags: ["users"],
  summary: "Update Method",
  params: Interfaces.InputUserId,
  body: Interfaces.InputUser.partial(),
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Delete = {
  description: "This is the method delete to user endpoint",
  tags: ["users"],
  summary: "Delete Method",
  params: Interfaces.InputUserId,
  response: {
    200: Interfaces.OutputUser,
  },
};
