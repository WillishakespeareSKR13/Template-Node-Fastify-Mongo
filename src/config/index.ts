import * as Swagger from "./swagger";
import * as Cors from "./cors";
import * as dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  APP: {
    NAME: process.env.APP_NAME ?? "Template Node Fastify Mongo",
    PORT: Number(process.env.PORT ?? 5000),
    HOST: process.env.HOST ?? "localhost",
    HOST_CALLBACK: process.env.HOST_CALLBACK ?? "http://localhost:5000",
    ENV: process.env.NODE_ENV ?? "development",
    LOGGER: process.env.NODE_ENV === "development" ? true : false,
    SECRET: process.env.SECRET ?? "secret",
  },
  DB: {
    URI: process.env.MONGO_URI ?? "mongodb://localhost:27017/app-db",
    HOST: process.env.MONGO_HOST ?? "localhost",
    PORT: Number(process.env.MONGO_PORT ?? 27017),
    NAME: process.env.MONGO_NAME ?? "app-db",
  },
  GOOGLE: {
    NAME: process.env.GOOGLE_NAME ?? "",
    JSON: process.env.GOOGLE_JSON ?? "{}",
    BUCKET: process.env.GOOGLE_BUCKET ?? "",
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? "",
    API_KEY: process.env.GOOGLE_API_KEY ?? "",
  },
  GET: {
    HOST_SWAGGER: () =>
      process.env.HOST_SWAGGER ?? `${CONFIG.APP.HOST}:${CONFIG.APP.PORT}`,
    HOST_API: () => CONFIG.APP.HOST?.replace("localhost", "0.0.0.0"),
    SCHEMES: () => (CONFIG.APP.ENV === "production" ? ["https"] : ["http"]),
  },
  SWAGGER: Swagger,
  CORS: Cors,
} as const;

export type ICONFIG = typeof CONFIG;

export default CONFIG;
