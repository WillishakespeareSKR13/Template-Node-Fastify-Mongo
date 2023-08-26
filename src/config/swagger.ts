import { SwaggerOptions as ISwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import { ICONFIG } from ".";
import Plugins from "../plugins";

export const OPTIONS = (CONFIG: ICONFIG): ISwaggerOptions => ({
  swagger: {
    info: {
      title: "Test swagger",
      description: "testing the fastify swagger api",
      version: "0.1.0",
    },
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "apiKey",
        in: "header",
      },
    },
    host: CONFIG.GET.HOST_SWAGGER(),
    security: [{ apiKey: [] }],
    schemes: CONFIG.GET.SCHEMES(),
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  hideUntagged: true,
  transform: Plugins.Zod.JsonSchemaTransform,
});

export const UIOPTIONS: FastifySwaggerUiOptions = {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: true,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};
