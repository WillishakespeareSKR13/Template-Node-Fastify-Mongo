import { z } from "zod";

export const Get = {
  response: {
    200: z.string(),
  },
};
