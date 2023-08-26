import bcrypt from "bcryptjs";
import { ZodString } from "zod";

export const Password = async (pass: string | ZodString) =>
  await bcrypt.hash(`${pass}`, 10);

export const ComparePassword = async (pass: string | ZodString, hash: string) =>
  await bcrypt.compare(`${pass}`, hash);
