import * as Controller from "./controllers";
import * as Schemas from "./schemas";

import { RouteOptions } from "fastify";

export const Get = {
  method: "GET",
  url: "/api/template",
  handler: Controller.Get,
  schema: Schemas.Get,
} as RouteOptions;

export const GetById = {
  method: "GET",
  url: "/api/template/:id",
  handler: Controller.GetById,
  schema: Schemas.GetById,
} as RouteOptions;

export const Post = {
  method: "POST",
  url: "/api/template",
  handler: Controller.Post,
  schema: Schemas.Post,
} as RouteOptions;

export const Update = {
  method: "PUT",
  url: "/api/template/:id",
  handler: Controller.Update,
  schema: Schemas.Update,
};

export const Delete = {
  method: "DELETE",
  url: "/api/template/:id",
  handler: Controller.Delete,
  schema: Schemas.Delete,
} as RouteOptions;
