// Route to login user. (In this case, create an token);
const jwt = require("jsonwebtoken");
let refreshTokens = [];

exports.loginUser = async (req, res) => {
  // validation
  const user = req.body.user;
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "Body empty" });
  }

  let accessToken = jwt.sign(user, "access", { expiresIn: "20s" });
  let refreshToken = jwt.sign(user, "refresh", { expiresIn: "7d" });
  refreshTokens.push(refreshToken);

  return res.status(201).json({
    accessToken,
    refreshToken,
  });
};
exports.refreshTokenfun = (req, res, next) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.json({ message: "Refresh token not found, login again" });
  }

  // If the refresh token is valid, create a new accessToken and return it.
  jwt.verify(refreshToken, "refresh", (err, user) => {
    if (!err) {
      const accessToken = jwt.sign({ username: user.name }, "access", {
        expiresIn: "20s",
      });
      return res.json({ success: true, accessToken });
    } else {
      return res.json({
        success: false,
        message: "Invalid refresh token",
      });
    }
  });
};
