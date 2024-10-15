import express from "express";
import { connectionDB } from "./db/connection.js";
import userRouter from "./src/modules/user/user.routes.js";
const app = express();
import session from "express-session";

import connectMongoDBSession from 'connect-mongodb-session';
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

app.use(userRouter);

app.use("*", (req, res, next) => {
  return res.json({ msg: "404 Not Found" });
});
connectionDB();

app.listen(3000);

