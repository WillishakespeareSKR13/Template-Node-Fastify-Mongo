import { SchemaOptions } from "mongoose";

export type NormalizeOptions = SchemaOptions<any> & {
  delete: string[];
};
export type NormalizeReturn = SchemaOptions<any>;

export const Normalize = (otps?: NormalizeOptions): NormalizeReturn => ({
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function (_, ret) {
      const delete_keys = otps?.delete ?? [];
      delete_keys.forEach((key) => {
        delete ret[key];
      });
      delete ret._id;
      return ret;
    },
  },
  ...otps,
});
