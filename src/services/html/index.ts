import { RouteOptions } from "fastify";

import * as Controller from "./controllers";
import * as Schemas from "./schemas";

export const HTML = {
  method: "GET",
  url: "/",
  handler: Controller.Get,
  schema: Schemas.Get,
} as RouteOptions;
