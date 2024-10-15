import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    PasswordConfirmation: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);


export const userModel = model("user", userSchema)