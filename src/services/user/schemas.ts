import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to User endpoint",
  tags: ["User"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputUsers,
  },
};

export const GetById = {
  description: "This is the method get by id to User endpoint",
  tags: ["User"],
  summary: "GetById Method",
  params: Interfaces.InputUserId,
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Post = {
  description: "This is the method post to User endpoint",
  tags: ["User"],
  summary: "Post Method",
  body: Interfaces.InputUser,
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Update = {
  description: "This is the method put to User endpoint",
  tags: ["User"],
  summary: "Update Method",
  params: Interfaces.InputUserId,
  body: Interfaces.InputUser,
  response: {
    200: Interfaces.OutputUser,
  },
};

export const Delete = {
  description: "This is the method delete to User endpoint",
  tags: ["User"],
  summary: "Delete Method",
  params: Interfaces.InputUserId,
  response: {
    200: Interfaces.OutputUser,
  },
};
