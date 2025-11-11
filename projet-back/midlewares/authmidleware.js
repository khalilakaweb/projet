const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .send({ errors: [{ msg: "Not authorized: token not found" }] });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });

    if (!foundUser) {
      return res
        .status(401)
        .send({ errors: [{ msg: "Not authorized: user not found" }] });
    }

    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "Not authorized" }] });
  }
};
module.exports = isAuth;
