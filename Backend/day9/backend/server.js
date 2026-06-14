const app = require("./srs/app")

const connnectTODB=require("./srs/config/database")

require("dotenv").config()

connnectTODB()
    .then(()=>{
        app.listen(3000,()=>{
            console.log("server is running on port 3000")
        })
    })
    .catch((err)=>{
        console.log("DB connection failed")
        console.log(err.message)
    })
