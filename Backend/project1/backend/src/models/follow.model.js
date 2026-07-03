const mongoose = require("mongoose")


const followSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:[true,"Follower is required"]
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"followee is required"]
    }
},{
    timestamps:true
})

const followModel = new mongoose.createConnection("follows",followSchema)

module.exports=followModel