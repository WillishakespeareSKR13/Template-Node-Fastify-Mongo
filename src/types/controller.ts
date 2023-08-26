import { FastifyReply, FastifyRequest } from "fastify";

export type IController<D = {}> = (
  req: FastifyRequest,
  reply: FastifyReply
) => Promise<D> | {};
