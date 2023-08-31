import { z } from "zod";

export const Template = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const InputTemplate = Template.omit({
  id: true,
});

export const InputTemplateId = Template.pick({
  id: true,
});

export const OutputTemplates = Template.array();
export const OutputTemplate = Template;

export type ITemplate = z.infer<typeof Template>;

export type InputByIdTemplate = {
  params: z.infer<typeof InputTemplateId>;
};

export type InputPostTemplate = {
  body: z.infer<typeof InputTemplate>;
};

export type InputUpdateTemplate = {
  params: z.infer<typeof InputTemplateId>;
  body: z.infer<typeof InputTemplate>;
};

export type InputDeleteTemplate = {
  params: z.infer<typeof InputTemplateId>;
};

export type OutputTemplates = z.infer<typeof OutputTemplates>;
export type OutputByIdTemplate = z.infer<typeof OutputTemplate>;
export type OutputPostTemplate = z.infer<typeof OutputTemplate>;
export type OutputUpdateTemplate = z.infer<typeof OutputTemplate>;
export type OutputDeleteTemplate = z.infer<typeof OutputTemplate>;
