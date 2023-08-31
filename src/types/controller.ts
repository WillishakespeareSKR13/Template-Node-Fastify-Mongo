import { FastifyReply, FastifyRequest } from "fastify";

export type IController<O = {}, I = {}> = (
  req: FastifyRequest & I,
  reply: FastifyReply
) => Promise<O>;
