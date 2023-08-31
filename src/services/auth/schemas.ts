import * as Interfaces from "./interfaces";

export const Login = {
  description: "This is the method login to Auth endpoint",
  tags: ["Auth"],
  summary: "Login Method",
  body: Interfaces.InputLogin,
  response: {
    200: Interfaces.OutputLogin,
  },
};

export const Register = {
  description: "This is the method register to Auth endpoint",
  tags: ["Auth"],
  summary: "Register Method",
  body: Interfaces.InputRegister,
  response: {
    200: Interfaces.OutputRegister,
  },
};

export const Token = {
  description: "This is the method token to Auth endpoint",
  tags: ["Auth"],
  summary: "Token Method",
  headers: Interfaces.InputHeaders,
  response: {
    200: Interfaces.OutputToken,
  },
};

export const RefreshToken = {
  description: "This is the method refresh token to Auth endpoint",
  tags: ["Auth"],
  summary: "Refresh Token Method",
  headers: Interfaces.InputHeaders,
  response: {
    200: Interfaces.OutputRefreshToken,
  },
};
