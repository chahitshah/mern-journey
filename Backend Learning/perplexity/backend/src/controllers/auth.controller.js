import userModel from "../models/user.model.js"
import { sendEmail } from "../services/mail.service.js"
import jwt from "jsonwebtoken"

export async function register(req,res){
    const {username,email,password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExists)
    {
        return res.status(400).json({
            message : "User already exists",
            success: false,
            err:"User already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password  
    })

    const emailVerificationToken = jwt.sign({
        userId:user._id,
        email:user.email
    },process.env.JWT_SECRET)

    res.cookie("token",emailVerificationToken)

    await sendEmail({
        to: email,
        subject: "Welcome to Perplexity!",
        html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Please verify your email address by clicking the link below:</p>
                <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
                <p>If you did not sign up for this account, please ignore this email.</p>
                <p>Thank you,<br>The Perplexity Team</p>
                
                
                
        `
    })

    res.status(201).json({
        message: "User registered successfully",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}



export async function verifyEmail(req,res)
{
    const {token} = req.query

    if (!token) {
        return res.status(400).json({
            message: "Invalid Token",
            success: false,
            err: "Token is required"
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(400).json({
            message: "Invalid Token",
            success: false,
            err: "Token verification failed"
        })
    }

    const user = await userModel.findOne({ email: decoded.email })

    if(!user)
    {
        return res.status(400).json({
            message : "Invalid Token",
            success: false,
            err: "User not found"
        })
    }

    user.verified = true

    await user.save();

    const html =`
        <h1>Email Verified Successfully</h1>
        <p>Thank you for verifying your email address. Your account is now active.</p>
        <p>You can now log in to your account and start using our services.</p>
        <a href="http://localhost:3000/login">Go to Login</a>
    `
    res.send(html)
}


export async function login(req,res)
{
    const {email,password} = req.body

    const user = await userModel.findOne({email}).select("+password")

    if(!user)
    {
        return res.status(400).json({
            message: "Invalid Credentials",
            success:false,
            err: "User not found"
        })
    }

    if(!user.verified)
    {
        return res.status(400).json({
            message: "Email not verified",
            success:false,
            err:"Please verify your email before logging in"
        })
    }

    const isPasswordValid = await user.comparePassword(password)

    if(!isPasswordValid)
    {
        return res.status(400).json({
            message: "Invalid Credentials",
            success:false,
            err:"Password is incorrect"
        })
    }

    const token = jwt.sign({
        userId: user._id,
        username: user.username,
        email:user.email
    },process.env.JWT_SECRET,{expiresIn:"1h"})

    res.cookie("token",token)

    res.status(200).json({
        message:"Login successful",
        sucess:true,
        err:null,
        user:{
            id : user._id,
            username : user.username,
            email : user.email
        }
    })


}


export async function getMe(req,res)
{
    const userId = req.user.userId

    const user = await userModel.findById(userId)

    if(!user)
    {
        return res.status(404).json({
            message:"User not found",
            success:false,
            err:"User not found"
        })
    }

    res.status(200).json({
        message : "user data fetch successfully",
        success:true,
        user
    })


}


