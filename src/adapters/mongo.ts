import mongoose, { ConnectOptions } from "mongoose";
import CONFIG from "../config";

export type IConnectOptions = ConnectOptions;
export type IConnectOn = {
  onOpen?: () => void;
  onWarning?: () => void;
};

const DefOptions: IConnectOptions = {};
const DefOn: IConnectOn = {
  onOpen: () => {},
  onWarning: () => {},
};

export const Connect = (options = DefOptions, on = DefOn) => {
  mongoose.connect(CONFIG.DB.URI, options);

  const Connection = mongoose.connection;

  Connection.once("open", () => on.onOpen?.());
  Connection.on("warning", () => on.onWarning?.());
};
