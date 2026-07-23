const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username must be unique"]
    },
    email:{
        type:String,
        require:[true,"Email must be required"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        require:[true,"Password must be required"],
        
    }
})
//expolre this two tihng on line no 21 and 22
// userSchema.pre("save",function(next){})
// userSchema.post("save",function(next){})
const userModel = mongoose.model("users",userSchema)

module.exports=userModel