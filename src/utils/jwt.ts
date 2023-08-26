import Fastify from "..";

export const Sign = (payload: object) => Fastify.jwt.sign(payload);

export const Decode = (token: string) =>
  Fastify.jwt.decode(token?.replace("Bearer ", ""));
