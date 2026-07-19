const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")
const likeModel = require("../models/like.model")
const followModel = require("../models/follow.model")
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})




async function createPostController(req, res) {

    console.log(req.body, req.file)



    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "cohort-2-insta-clone-post"
    })

    const post = await postModel.create({
        Caption: req.body.Caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "post create successfully.",
        post
    })
}

async function getPostController(req, res) {


    const userId = req.user.id

    const posts = await postModel.find({
        user: userId,

    })

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

}


async function getPostDetails(req, res) {


    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post Not Found"
        })
    }

    const isValidUser = post.user.toString() === userId

    if (!isValidUser) {
        return res.status(403).json({
            message: "Forbidden Content."
        })
    }

    return res.status(200).json({
        message: "Post Fetched successfully.",
        post
    })


}

async function likePostController(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post not found."
        })
    }

    const alreadyLiked = await likeModel.findOne({
        post: postId,
        user: username
    })

    if (alreadyLiked) {
        return res.status(400).json({
            message: "You already liked this post "
        })
    }


    const like = await likeModel.create({
        post: postId,
        user: username
    })



    res.status(200).json({
        message: "Post like successfully",
        like
    })
}


async function unlikePostController(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const existingLike = await likeModel.findOne({
        post: postId,
        user: username
    })

    if (!existingLike) {
        return res.status(400).json({
            message: "You have not liked this post yet"
        })
    }

    await likeModel.findOneAndDelete({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: "Post unliked successfully"
    })
}


async function getFeedController(req, res) {

    const user = req.user
    const posts = await Promise.all((await postModel.find().sort({ _id: -1 }).populate("user").select("-user.password").lean())
        .map(async (post) => {
            const isliked = await likeModel.findOne({
                user: user.username,
                post: post._id
            })
            post.isliked = isliked ? true : false

            return post
        }))



    res.status(200).json({
        message: "posts fetch successfully",
        posts
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetails,
    likePostController,
    unlikePostController,
    getFeedController
}