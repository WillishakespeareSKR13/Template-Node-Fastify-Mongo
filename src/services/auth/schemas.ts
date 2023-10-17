import * as ITF from "./interfaces";

export const Login = {
  description: "This is the method login to Auth endpoint",
  tags: ["Auth"],
  summary: "Login Method",
  body: ITF.InLogin,
  response: {
    200: ITF.OutLogin,
  },
};

export const Register = {
  description: "This is the method register to Auth endpoint",
  tags: ["Auth"],
  summary: "Register Method",
  body: ITF.InRegister,
  response: {
    200: ITF.OutRegister,
  },
};

export const Token = {
  description: "This is the method token to Auth endpoint",
  tags: ["Auth"],
  summary: "Token Method",
  headers: ITF.InHeaders,
  response: {
    200: ITF.OutToken,
  },
};

export const RefreshToken = {
  description: "This is the method refresh token to Auth endpoint",
  tags: ["Auth"],
  summary: "Refresh Token Method",
  headers: ITF.InHeaders,
  response: {
    200: ITF.OutRefreshToken,
  },
};
