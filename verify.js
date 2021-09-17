const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("Access Denied");

  try {
    const verify = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verify;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
