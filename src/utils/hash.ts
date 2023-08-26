import bcrypt from "bcryptjs";

export const Password = async (pass: string) => await bcrypt.hash(pass, 10);

export const ComparePassword = async (pass: string, hash: string) =>
  await bcrypt.compare(pass, hash);
