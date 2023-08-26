import { z } from "zod";

export const Template = z.object({
  message: z.string(),
  messagePrivate: z.string(),
});

export const InputTemplate = Template.pick({
  message: true,
  messagePrivate: true,
});

export const InputTemplateId = z.object({
  id: z.string(),
});

export const OutputTemplate = Template.omit({
  messagePrivate: true,
});
