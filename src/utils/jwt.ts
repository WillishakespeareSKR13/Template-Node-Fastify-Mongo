import { ZodString } from "zod";
import Fastify from "..";

export const Sign = (payload: object) => Fastify.jwt.sign(payload);

export const Decode = (token: string | ZodString) =>
  Fastify.jwt.decode(`${token}`?.replace("Bearer ", ""));
