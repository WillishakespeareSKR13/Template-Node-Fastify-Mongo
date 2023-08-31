import { FastifyInstance, RouteOptions } from "fastify";
import fs from "fs";

const Routes = {
  Register: (_: FastifyInstance) => {},
};

type IRoute = {
  [key: string]: RouteOptions;
};

Routes.Register = (Fastify) => {
  fs.readdirSync(__dirname).forEach((folder) => {
    const [name, ext] = folder.split(".");
    if (ext) return;

    fs.readdirSync(`${__dirname}/${folder}`).forEach((file) => {
      const [name, ext] = file.split(".");
      const excludeExt = ["ts", "js"];
      const includeName = ["index"];
      if (!excludeExt.includes(ext)) return;
      if (!includeName.includes(name)) return;
      const Route = require(`./${folder}/${file}`) as IRoute;
      Object.values(Route).forEach((route) => {
        Fastify.route(route);
      });
    });
  });
};

export default Routes;
