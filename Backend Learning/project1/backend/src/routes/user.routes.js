const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middleware/auth.middleware")
const userRouter=express.Router()

userRouter.post("/follow/:username",identifyUser,userController.followUserController)
userRouter.post("/unfollow/:username",identifyUser,userController.unfolloweUserController)
userRouter.get("/pending-requests",identifyUser,userController.getPendingRequestsController)
userRouter.post("/accept/:requestId",identifyUser,userController.requestaccept)
userRouter.post("/reject/:requestId",identifyUser,userController.requestreject)



module.exports= userRouter