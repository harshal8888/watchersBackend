var express = require("express");
var router = express.Router();
const auth = require("../controller/tokenAuth");

const login = require("../controller/login");
const profile = require("../controller/profile");
const userRegister = require("../controller/userRegister");

// const refreshtoken = require("../controller/refreshToken");
router.post("/login", login.loginUser);

// Creates a new accessToken using the given refreshToken;
router.post("/refresh", login.refreshTokenfun);

//user register
router.post("/userregister", userRegister.userRegistration);

// Protected route, can only be accessed when user is logged-in
router.post("/profile", auth, profile.userProfile);

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/profile:
 *  get:
 *      tags: [MainData]
 *      parameters:
 *          - name: page_number
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
router.get("/profile", profile.userInfo);

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for the main data
 * /api/login:
 *  post:
 *      tags: [MainData]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: coder
 *                          password:
 *                              type: string
 *                              default: coder123
 *      responses:
 *          default:
 *              description: This is the default response for it
 */
//  router.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     const out = {
//       token: "thisIsAJWTTokenKeepItSafe",
//     };
//     res.send(out);
//   });

module.exports = router;
