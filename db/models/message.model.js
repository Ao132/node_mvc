import { model, Schema } from "mongoose";

const messageSchema = new Schema({
  message: { type: String },
  userId:{
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

export const messageModel = model("message",messageSchema);