import app from "./src/app.js"
import {connectToDB} from "./src/config/db.js"

connectToDB()
app.listen(3000,()=>{
    console.log("Server is running at port no : 3000")
})

