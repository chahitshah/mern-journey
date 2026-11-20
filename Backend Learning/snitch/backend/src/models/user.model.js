import mongoose from "mongoose"
import {config} from "../config/config.js"
import bycrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    fullname:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["buyer","seller"],
        default:"buyer"
    }
})

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return

    const hashedPassword = await bycrypt.hash(this.password,10)
    this.password=hashedPassword
})

userSchema.methods.comparePassword = async function(password){
    return await bycrypt.compare(password,this.password)
}

const userModel = mongoose.model("User",userSchema)

export default userModel
