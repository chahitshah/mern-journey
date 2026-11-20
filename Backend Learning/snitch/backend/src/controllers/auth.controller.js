import jwt from "jsonwebtoken"; 
import userModel from "../models/user.model.js";
import {config} from "../config/config.js"


async function sendTokenResponse(user,res,message)
{
    const token = jwt.sign({
        id:user._id
    },config.jwtSecret,{expiresIn:'7d'})

    res.cookie("token",token)

    res.status(200).json({
        message,
        user:{
            id:user._id,
            fullname:user.fullname,
            email:user.email,
            contact:user.contact,
            role:user.role
            
        }
    })
}

export const registeruser = async(req,res)=>
{
    const {email,password,fullname,contact,isSeller} = req.body

    try{
        const isuserExist = await userModel.findOne({
            $or:[
                {email},
                {contact}
            ]
        })

        if(isuserExist)
        {
            return res.status(400).json({message:"User already exists"})
        }

        const newUser = await userModel.create({
            email,
            password,
            fullname,
            contact,
            role:isSeller?"seller":"buyer"
        })
        
        await sendTokenResponse(newUser,res,"User Registerd Successfully ")

    }
    catch(error){
        return res.status(500).json({message:"Internal server error "})
    }
}

export const loginuser = async(req,res)=>{

    const{email,contact,password}=req.body

    try{
        const isuserExist = await userModel.findOne({
            $or:[
                {email},
                {contact}
            ]
        }).select("+password")
        
        if(!isuserExist)
        {
            return res.status(400).json({message:"Invalid Email or Password"})

        }

        const checkpassowrd = await isuserExist.comparePassword(password)

        if(!checkpassowrd)
        {
            return res.status(400).json({message:"Invalid Email or Password"})
        }

        await sendTokenResponse(isuserExist,res,"Login Successfully")


    }catch(err)
    {
        return res.status(500).json({message:"Internal server error "})
    }
}