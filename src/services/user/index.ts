import * as Controller from "./controllers";
import * as Schemas from "./schemas";

import { RouteOptions } from "fastify";

export const Get = {
  method: "GET",
  url: "/api/user",
  handler: Controller.Get,
  schema: Schemas.Get,
  onRequest: (f) => f.jwtVerify(),
} as RouteOptions;

export const GetById = {
  method: "GET",
  url: "/api/user/:id",
  handler: Controller.GetById,
  schema: Schemas.GetById,
  onRequest: (f) => f.jwtVerify(),
} as RouteOptions;

export const Post = {
  method: "POST",
  url: "/api/user",
  handler: Controller.Post,
  schema: Schemas.Post,
  onRequest: (f) => f.jwtVerify(),
} as RouteOptions;

export const Up = {
  method: "PUT",
  url: "/api/user/:id",
  handler: Controller.Update,
  schema: Schemas.Up,
  onRequest: (f) => f.jwtVerify(),
} as RouteOptions;

export const Del = {
  method: "DELETE",
  url: "/api/user/:id",
  handler: Controller.Delete,
  schema: Schemas.Del,
  onRequest: (f) => f.jwtVerify(),
} as RouteOptions;
