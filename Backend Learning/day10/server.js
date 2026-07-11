require("dotenv").config()
const app = require("./srs/app")

const connectToDb=require("./srs/config/database")

connectToDb()
app.listen(3000,()=>{
    console.log("server is running on port no 3000")
})