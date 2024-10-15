import { messageModel } from "../../../db/models/message.model.js";

export const message = async (req, res, next) => {
  const messages = await messageModel.find({userId: req.session.userId});
  const url = `${req.protocol}://${req.headers.host}/user/${req.session.userId}`;
  req.session.loggedIn
    ? res.render("messages.ejs", {
        loggedIn: req.session.loggedIn,
        session: req.session,
        messages,
        url,
      })
    : res.redirect("/login");
};

export const sendMsg = async (req, res, next) => {
  await messageModel.create({
    userId: req.params.id,
    message: req.body.msg,
  });
  res.redirect(`/user/${req.params.id}`);
};
