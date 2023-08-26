import { FastifyInstance, RouteOptions } from "fastify";
import fs from "fs";

const Routes = {
  Register: (_: FastifyInstance) => {},
};

type IRoute = {
  [key: string]: RouteOptions;
};

Routes.Register = (Fastify) => {
  fs.readdirSync(__dirname).forEach((file) => {
    const [name, ext] = file.split(".");
    const excludeExt = ["ts", "js"];
    const excludeName = ["index"];
    if (!excludeExt.includes(ext)) return;
    if (excludeName.includes(name)) return;
    const Route = require(`./${file}`) as IRoute;
    Object.values(Route).forEach((route) => {
      Fastify.route(route);
    });
  });
};

export default Routes;
