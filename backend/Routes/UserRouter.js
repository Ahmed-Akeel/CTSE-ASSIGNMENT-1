const express = require("express");
const UserRouter = express.Router();
const UserController = require("../Controllers/User");

// userRegistration
UserRouter.post("/user/registration", UserController.userRegistration);

// userLogin
UserRouter.post("/user/login", UserController.userLogin);

// // GetAll
// UserRouter.get("/users", UserController.getUsers);

module.exports = UserRouter;