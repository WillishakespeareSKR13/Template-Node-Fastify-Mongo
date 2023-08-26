import { RouteOptions } from "fastify";
import Controller from "../controllers";

export const HTML: RouteOptions = {
  method: "GET",
  url: "/",
  handler: Controller.Html.Get,
  schema: Controller.Html.Schema.Get,
};
