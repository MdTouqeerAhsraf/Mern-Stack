const express = require("express");

const router = express.Router();
const registerUser = require("./UserController");
const { register } = require("module");

// router.route("/register").post(registerUser).get(
//     (req,res)=> {
//         res.send("wow");
//     });
// router.route("/product").delete(registerUser);


router
// .route("/api/v1/register").post(registerUser)
.route("/register").post(registerUser);
// .get((req, res) => {
//     res.send("wow");
// });



module.exports = router;