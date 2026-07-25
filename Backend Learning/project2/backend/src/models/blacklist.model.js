const mongoose = require("mongoose")

const blacklisrSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token is required for blacklisting"],

    }
},{
    timestamps : true
})

const blacklistModel = mongoose.model("blacklist",blacklisrSchema)

module.exports = blacklistModel