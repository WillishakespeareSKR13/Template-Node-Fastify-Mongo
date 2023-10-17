import { z } from "zod";

export const Template = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const InTemplate = Template.omit({
  id: true,
});

export const InTemplateId = Template.pick({
  id: true,
});

export const OutTemplates = Template.array();
export const OutTemplate = Template;

export type ITemplate = z.infer<typeof Template>;

export type InByIdTemplate = {
  params: z.infer<typeof InTemplateId>;
};

export type InPostTemplate = {
  body: z.infer<typeof InTemplate>;
};

export type InUpTemplate = {
  params: z.infer<typeof InTemplateId>;
  body: z.infer<typeof InTemplate>;
};

export type InDelTemplate = {
  params: z.infer<typeof InTemplateId>;
};

export type OutTemplates = z.infer<typeof OutTemplates>;
export type OutByIdTemplate = z.infer<typeof OutTemplate>;
export type OutPostTemplate = z.infer<typeof OutTemplate>;
export type OutUpTemplate = z.infer<typeof OutTemplate>;
export type OutDelTemplate = z.infer<typeof OutTemplate>;
