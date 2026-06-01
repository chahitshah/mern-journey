const app = require('./srs/app');

const mongoose = require("mongoose")

function connectToDb()
{
    mongoose.connect("mongodb+srv://chahit:Chahit%402004@cluster0.qupqshi.mongodb.net/day-6")
    .then(()=>{
        console.log("connected to database")
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server is running at port no 3000")
})