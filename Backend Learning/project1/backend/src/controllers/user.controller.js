const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followerUsername == followeeUsername) {
        return res.status(400).json({
            message: "you cannot follow yourself "
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername
    })

    if (!isFolloweeExists) {
        return res.status(404).json({
            message: "user you are trying to follow is does not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })



    if (isAlreadyFollowing) {
        if (isAlreadyFollowing.status == "pending") {
            return res.status(409).json({
                message: "Follow request already sent"
            })
        }
        if (isAlreadyFollowing.status == "accepted") {
            return res.status(409).json({
                message: `You are already following ${followeeUsername}`
            })
        }
        if (isAlreadyFollowing.status == "rejected") {

            isAlreadyFollowing.status = "pending"

            await isAlreadyFollowing.save()

            return res.status(200).json({
                message: "Follow request sent successfully",
                follow: isAlreadyFollowing
            })
        }
    }



    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
        
    })

    res.status(201).json({
        message: "follow request sent successfully",
        follow: followRecord
    })

}


async function unfolloweUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `you are not following ${followeeUsername}`
        })
    }

    if(isUserFollowing)
    {
        if(isUserFollowing.status == "pending" || isUserFollowing.status == "rejected")
        {
            return res.status(200).json({
                message : "you are not following this user"
            })
        }

    }

    if(isUserFollowing.status == "accepted")
    {
        await followModel.findByIdAndDelete(isUserFollowing._id);

        res.status(200).json({
        message: `you have Unfollowed ${followeeUsername}`
    })
    }

    
}

async function getPendingRequestsController(req, res) {
    const Username = req.user.username

    const records = await followModel.find({
        followee : Username,
        status : "pending"

        
    })



    res.status(200).json({
        message: "request pending",
        records
    })
}

async function requestaccept(req,res)
{
    const requestId = req.params.requestId

    const findrequest = await followModel.findById(requestId)

    if(!findrequest)
    {
        return res.status(404).json({
            message : "request not found"
        })
    }

    findrequest.status="accepted"

    await findrequest.save()

    res.status(200).json({
        message : "accept request successfully"
    })

}

async function requestreject(req,res)
{
    const requestId = req.params.requestId

    const findrequest = await followModel.findById(requestId)

    if(!findrequest)
    {
        return res.status(404).json({
            message : "request not found"
        })
    }

    findrequest.status="rejected"

    await findrequest.save()
    res.status(200).json({
        message : "request rejected "
    })

}



module.exports = {
    followUserController,
    unfolloweUserController,
    getPendingRequestsController,
    requestaccept,
    requestreject

}