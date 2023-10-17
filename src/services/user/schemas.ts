import * as ITF from "./interfaces";

export const Get = {
  description: "This is the method get to User endpoint",
  tags: ["User"],
  summary: "Get Method",
  response: {
    200: ITF.OutUsers,
  },
};

export const GetById = {
  description: "This is the method get by id to User endpoint",
  tags: ["User"],
  summary: "GetById Method",
  params: ITF.InUserId,
  response: {
    200: ITF.OutUser,
  },
};

export const Post = {
  description: "This is the method post to User endpoint",
  tags: ["User"],
  summary: "Post Method",
  body: ITF.InUser,
  response: {
    200: ITF.OutUser,
  },
};

export const Up = {
  description: "This is the method put to User endpoint",
  tags: ["User"],
  summary: "Up Method",
  params: ITF.InUserId,
  body: ITF.InUser,
  response: {
    200: ITF.OutUser,
  },
};

export const Del = {
  description: "This is the method delete to User endpoint",
  tags: ["User"],
  summary: "Del Method",
  params: ITF.InUserId,
  response: {
    200: ITF.OutUser,
  },
};
