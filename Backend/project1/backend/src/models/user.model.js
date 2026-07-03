const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"User is alrrady exist"],
        required:[true,"User name is already exist"]
    },
    email:{
        type:String,
        unique:[true,"Email is alrrasy exist"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
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