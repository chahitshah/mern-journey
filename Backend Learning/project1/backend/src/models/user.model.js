const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"User is already exist"],
        required:[true,"User name is already exist"]
    },
    email:{
        type:String,
        unique:[true,"Email is already exist"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select : false
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/czhtq5xpjn/images.jpg"
    },
    followers:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }]
})

const userModel=mongoose.model("users",userSchema)

module.exports=userModel