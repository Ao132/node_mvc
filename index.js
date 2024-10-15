const app = express();
import express from "express";
import session from "express-session";
import { connectionDB } from "./db/connection.js";
import userRouter from "./src/qmodules/user/user.routes.js";

import connectMongoDBSession from 'connect-mongodb-session';
import messageRouter from "./src/modules/message/message.routes.js";
const MongoDBStore = connectMongoDBSession(session);


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/mvc",
  collection: "sessions"
})

  app.use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: false,
      store
    })  
  )

app.use("/user",userRouter);
app.use("/message",messageRouter);

app.use("*", (req, res, next) => {
  return res.json({ msg: "404 Not Found" });
});
connectionDB();

app.listen(3000);


