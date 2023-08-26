import type {
  FastifySchema,
  FastifySchemaCompiler,
  FastifyTypeProvider,
} from "fastify";
import type { FastifySerializerCompiler } from "fastify/types/schema";
import type { z, ZodAny, ZodTypeAny } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

type FreeformRecord = Record<string, any>;

const defaultSkipList = [
  "/documentation/",
  "/documentation/initOAuth",
  "/documentation/json",
  "/documentation/uiConfig",
  "/documentation/yaml",
  "/documentation/*",
  "/documentation/static/*",
];

export interface ZodTypeProvider extends FastifyTypeProvider {
  output: this["input"] extends ZodTypeAny ? z.infer<this["input"]> : never;
}

interface Schema extends FastifySchema {
  hide?: boolean;
}

const ZodToJsonSchemaOptions = {
  target: "openApi3",
  $refStrategy: "none",
} as const;

export const CreateJsonSchemaTransform = ({
  skipList,
}: {
  skipList: readonly string[];
}) => {
  return ({ schema, url }: { schema: Schema; url: string }) => {
    if (!schema) {
      return {
        schema,
        url,
      };
    }

    const { response, headers, querystring, body, params, hide, ...rest } =
      schema;

    const transformed: FreeformRecord = {};

    if (skipList.includes(url) || hide) {
      transformed.hide = true;
      return { schema: transformed, url };
    }

    const zodSchemas: FreeformRecord = { headers, querystring, body, params };

    for (const prop in zodSchemas) {
      const zodSchema = zodSchemas[prop];
      if (zodSchema) {
        transformed[prop] = zodToJsonSchema(zodSchema, ZodToJsonSchemaOptions);
      }
    }

    if (response) {
      transformed.response = {};

      for (const prop in response as any) {
        const schema = ResolveSchema((response as any)[prop]);

        const transformedResponse = zodToJsonSchema(
          schema as any,
          ZodToJsonSchemaOptions
        );
        transformed.response[prop] = transformedResponse;
      }
    }

    for (const prop in rest) {
      const meta = rest[prop as keyof typeof rest];
      if (meta) {
        transformed[prop] = meta;
      }
    }

    return { schema: transformed, url };
  };
};

export const JsonSchemaTransform = CreateJsonSchemaTransform({
  skipList: defaultSkipList,
});

export const ValidatorCompiler: FastifySchemaCompiler<ZodAny> =
  ({ schema }) =>
  (data): any => {
    try {
      return { value: schema.parse(data) };
    } catch (error) {
      return { error };
    }
  };

function hasOwnProperty<T, K extends PropertyKey>(
  obj: T,
  prop: K
): obj is T & Record<K, any> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function ResolveSchema(
  maybeSchema: ZodAny | { properties: ZodAny }
): Pick<ZodAny, "safeParse"> {
  if (hasOwnProperty(maybeSchema, "safeParse")) {
    return maybeSchema;
  }
  if (hasOwnProperty(maybeSchema, "properties")) {
    return maybeSchema.properties;
  }
  throw new Error(`Invalid schema passed: ${JSON.stringify(maybeSchema)}`);
}

export class ResponseValidationError extends Error {
  public details: FreeformRecord;

  constructor(validationResult: FreeformRecord) {
    super("Response doesn't match the schema");
    this.name = "ResponseValidationError";
    this.details = validationResult.error;
  }
}

export const SerializerCompiler: FastifySerializerCompiler<
  ZodAny | { properties: ZodAny }
> =
  ({ schema: maybeSchema }) =>
  (data) => {
    const schema = ResolveSchema(maybeSchema) as ZodAny;
    const result = schema.safeParse(data);

    if (result.success) {
      return JSON.stringify(result.data);
    }

    throw new ResponseValidationError(result);
  };
