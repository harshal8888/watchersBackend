var express = require("express");
var router = express.Router();
const auth = require("../controller/tokenAuth");

const login = require("../controller/login");
const profile = require("../controller/profile");
// const refreshtoken = require("../controller/refreshToken");

router.post("/login", login.loginUser);
// Creates a new accessToken using the given refreshToken;
router.post("/refresh", login.refreshTokenfun);
// Protected route, can only be accessed when user is logged-in
router.post("/profile", auth, profile.userProfile);

module.exports = router;
