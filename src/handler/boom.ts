import * as boom from "@hapi/boom";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

type IHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => void;

type IZodError = {
  path: string[];
  message: string;
};

export const ErrorHandler: IHandler = (error, _, reply) => {
  const { output, message, name } = boom.boomify(error);
  const { statusCode } = output;
  const parse = () => {
    switch (name) {
      case "ZodError":
        const arrayError = JSON.parse(message ?? "[]") as IZodError[];
        const errors = arrayError.map((error) => ({
          key: error.path.join(","),
          message: error.message,
        }));
        return errors;
      default:
        return message ?? ["Error interno del servidor"];
    }
  };
  reply.code(statusCode).send({
    statusCode,
    error: name,
    message: parse(),
  });
};
