import { RouteOptions } from "fastify";
import Controller from "../controllers";

export const GetHome: RouteOptions = {
  method: "GET",
  url: "/",
  handler: Controller.Html.Get,
  schema: Controller.Html.Schema.Get,
};
