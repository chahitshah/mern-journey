const express = require("express")

const authRouter = express.Router()

const authController = require("../controllers/auth.controller")

const identifyuser = require("../middleware/auth.middleware")


authRouter.post("/register", authController.registerController)

authRouter.post("/login", authController.loginController)


authRouter.get("/get-me", identifyuser, authController.getMeController)

module.exports = authRouter