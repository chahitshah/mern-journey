const userModel = require("../models/user.model")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")
const jwt = require("jsonwebtoken")


async function authUser(req,res,next)
{
    const token = req.cookies.token

    if(!token)
    {
        return res.status(401).json({
            message : "Token not provided"
        })
    }

    const istokenblacklisting = await redis.get(token)

    if(istokenblacklisting)
    {
        return res.status(401).json({
            message : "Invalid Token"
        })
    }

    let decoded = null 

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)

        
    }catch(err)
    {
        return res.status(401).json({
            message : "Invalid Token"
        })
    }

    req.user = decoded

    next()

    
}

module.exports=authUser