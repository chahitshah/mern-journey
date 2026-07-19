const express = require("express")

const postRouter = express.Router()

const postController = require("../controllers/post.controllers")
const multer = require("multer")
const upload = multer({storage : multer.memoryStorage()})
const identifyUser = require("../middleware/auth.middleware")

postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)


postRouter.get("/",identifyUser,postController.getPostController)

    
postRouter.get("/details/:postId",identifyUser,postController.getPostDetails)

postRouter.post("/like/:postId",identifyUser,postController.likePostController)

postRouter.delete("/unlike/:postId",identifyUser,postController.unlikePostController)

postRouter.get("/feed",identifyUser,postController.getFeedController)

module.exports=postRouter