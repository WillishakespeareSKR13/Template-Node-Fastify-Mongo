import { FastifyReply, FastifyRequest } from "fastify";

export type ICtrl<Out = {}, In = {}> = (
  req: FastifyRequest & In,
  reply: FastifyReply
) => Promise<Out>;
