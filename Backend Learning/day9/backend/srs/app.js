const express = require("express")
const noteModel = require("./models/note.model")

const cors = require("cors")

const path = require("path")


const app = express()

app.use(express.json())
app.use(express.static("./public"))
app.use(cors())
app.post("/api/notes",async (req,res)=>{
    const {title,description}=req.body

    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message :"note is created successfully",
        note
    })
    
})

app.get("/api/notes", async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"notes fetched successfully",
        notes
    })
})

app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id

    const deletenote = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"note delete successfully",
        deletenote
    })
}) 

app.patch("/api/notes/:id", async (req,res)=>{
    const id = req.params.id

    const {description}= req.body

    const updatedesc = await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message : "note updsted successfully",
        updatedesc
    })
})

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})


module.exports= app
