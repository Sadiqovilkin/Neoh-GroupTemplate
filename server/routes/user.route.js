const express = require("express");
const user_router = express.Router();
const controller = require("../controllers/user.controller");

user_router.get("/api/users", controller.getAll);
user_router.get("/api/users/:id", controller.getOne);
user_router.delete("/api/users/:id", controller.delete);
user_router.patch("/api/users/:id", controller.update);
user_router.post("/api/users", controller.register);
user_router.post("/api/login", controller.user_login);
user_router.get("/api/verify/:token", controller.verify);


module.exports = user_router;
