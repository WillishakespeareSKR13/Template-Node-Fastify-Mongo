import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetTest: RouteOptions = {
  method: "POST",
  url: "/api/auth/login",
  handler: Controller.Auth.Login,
  schema: Controller.Auth.Schema.Login,
};
export const GetAuthById: RouteOptions = {
  method: "POST",
  url: "/api/auth/register",
  handler: Controller.Auth.Register,
  schema: Controller.Auth.Schema.Register,
};
export const CreateAuth: RouteOptions = {
  method: "GET",
  url: "/api/auth/token",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Auth.Token,
  schema: Controller.Auth.Schema.Token,
};
