import jwt from "jsonwebtoken"

export function authUser(req,res,next)
{
    const token = req.cookies.token

    if(!token)
    {
        return res.status(401).json({
            message:"Unauthorized access",
            success:false,
            err: "No Token provided"
        })
    }

    let decoded=null 
    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err)
    {
        return res.status(401).json({
            message : "Unauthorized",
            success:false,
            err:"Invalid token"
        })
    }

}