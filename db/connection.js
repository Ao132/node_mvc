import mongoose from "mongoose";

export const connectionDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/mvc")
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.log("err connecting db ",err));
};