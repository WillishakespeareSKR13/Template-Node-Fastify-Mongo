import { FastifyCorsOptions } from "@fastify/cors";

export const OPTIONS: FastifyCorsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 90,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
