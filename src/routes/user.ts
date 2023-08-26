import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetUser: RouteOptions = {
  method: "GET",
  url: "/api/user",
  handler: Controller.User.Get,
  schema: Controller.User.Schema.Get,
};
export const GetUserById: RouteOptions = {
  method: "GET",
  url: "/api/user/:id",
  handler: Controller.User.GetById,
  schema: Controller.User.Schema.GetById,
};
export const CreateUser: RouteOptions = {
  method: "POST",
  url: "/api/user",
  handler: Controller.User.Create,
  schema: Controller.User.Schema.Create,
};
export const UpdateUser: RouteOptions = {
  method: "PUT",
  url: "/api/user/:id",
  handler: Controller.User.Update,
  schema: Controller.User.Schema.Update,
};
export const DeleteUser: RouteOptions = {
  method: "DELETE",
  url: "/api/user/:id",
  handler: Controller.User.Delete,
  schema: Controller.User.Schema.Delete,
};
