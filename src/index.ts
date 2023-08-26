import Fast from "fastify";
import FastifySwagger from "@fastify/swagger";
import FastifySwaggerUi from "@fastify/swagger-ui";
import FastifyCors from "@fastify/cors";

import JWT from "@fastify/jwt";

import CONFIG from "./config";

import Routes from "./routes";

import Handler from "./handler";
import Plugins from "./plugins";
import Adapters from "./adapters";

export const Fastify = Fast({ logger: CONFIG.APP.LOGGER });

Adapters.Mongo.Connect();

Fastify.register(JWT, {
  secret: CONFIG.APP.SECRET,
});

Fastify.register(FastifySwagger, CONFIG.SWAGGER.OPTIONS(CONFIG));
Fastify.register(FastifySwaggerUi, CONFIG.SWAGGER.UIOPTIONS);
Fastify.register(FastifyCors, CONFIG.CORS.OPTIONS);

Fastify.setErrorHandler(Handler.Boom.ErrorHandler);
Fastify.setValidatorCompiler(Plugins.Zod.ValidatorCompiler);
Fastify.setSerializerCompiler(Plugins.Zod.SerializerCompiler);

Fastify.after(() => {
  Routes.Register(Fastify);
});

const start = async () => {
  await Fastify.listen({ port: CONFIG.APP.PORT, host: CONFIG.GET.HOST_API() });
  await Fastify.ready();
  Fastify.swagger();
};

start().catch((err) => {
  Fastify.log.error(err);
  process.exit(1);
});

export default Fastify;
