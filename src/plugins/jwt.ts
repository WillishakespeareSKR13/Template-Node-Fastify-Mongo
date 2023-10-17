import { ICtrl } from "../types/controller";

export const VerifyToken: ICtrl = async (request) => {
  await request.jwtVerify();
  return {};
};
