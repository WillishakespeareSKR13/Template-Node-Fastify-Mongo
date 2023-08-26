import { IController } from "../types/controller";

export const VerifyToken: IController = async (request) => {
  await request.jwtVerify();
  return {};
};
