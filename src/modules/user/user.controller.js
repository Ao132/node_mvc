import { userModel } from "../../../db/models/user.model.js";

export const index = (req, res, next) => {
  res.render("index.ejs", { loggedIn: false });
};

export const login = (req, res, next) => {
  res.render("login.ejs", { error: req.query.error, loggedIn: false });
};

export const register = (req, res, next) => {
  res.render("register.ejs", { error: req.query.error, loggedIn: false });
};

export const user = (req, res, next) => {
  res.render("user.ejs", {
    loggedIn: req.session.loggedIn,
    session: req.session,
  });
};

export const logout = (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
};

export const handleRegister = async (req, res, next) => {
  const { name, email, password, PasswordConfirmation } = req.body;

  const userExist = await userModel.findOne({ email });

  if (userExist) return res.redirect("/register?error=user already exists");

  await userModel.create({ name, email, password, PasswordConfirmation });
  res.redirect("/login");
};

export const handleLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const userExist = await userModel.findOne({ email });

  if (!userExist || password != userExist.password)
    return res.redirect("/login?error=user not exists or invalid password");

  req.session.userId = userExist._id;
  req.session.name = userExist.name;
  req.session.loggedIn = true;

  return res.redirect("/message");
};
