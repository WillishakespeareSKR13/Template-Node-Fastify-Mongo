import { InputUser, InputUserId, OutputUser } from "./interfaces";

export const Get = {
  description: "This is the method get to user endpoint",
  tags: ["users"],
  summary: "Get Method",
  response: {
    200: OutputUser.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to user endpoint",
  tags: ["users"],
  summary: "Get By Id Method",
  params: InputUserId,
  response: {
    200: OutputUser,
  },
};

export const Create = {
  description: "This is the method post to user endpoint",
  tags: ["users"],
  summary: "Post Method",
  body: InputUser,
  response: {
    200: OutputUser,
  },
};

export const Update = {
  description: "This is the method update to user endpoint",
  tags: ["users"],
  summary: "Update Method",
  params: InputUserId,
  body: InputUser.partial(),
  response: {
    200: OutputUser,
  },
};

export const Delete = {
  description: "This is the method delete to user endpoint",
  tags: ["users"],
  summary: "Delete Method",
  params: InputUserId,
  response: {
    200: OutputUser,
  },
};
