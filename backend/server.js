const express = require('express')
const app = express()
const cors = require("cors")
const port = 8800
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())
const mongoose = require("mongoose")
const {Schema} = mongoose

const teachersSchema = new Schema({
    name:{type:String, required: true},
    position:{type:String, required: true},
    description:{type:String, required: true},
    image:{type:String, required: true},
    price: {type:Number, required:true}
},{
    timestamps:true
})

const Teacher = mongoose.model('teacher', teachersSchema)

app.get("/teacher", (req,res)=>{
    Teacher.find({}, (err,doc)=>{
        if (!err) {
            res.send(doc)
            res.status(200)
        }else{res.status(404).json({message:err})}
    })
})
app.get("/teacher/:id", (req,res)=>{
   const {id} = req.params
    Teacher.findById(id, (err,doc)=>{
        if (!err) {
            if (doc) {
                res.send(doc)
            } else{
                res.status(404).json({message:"error"})
            }
            
        }
        else{res.status(500).json({message:err})}
    })
})


app.delete("/teacher/:id", (req,res)=>{
   const {id} = req.params

    Teacher.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.send(doc)
        } else{
            res.status(404).json({message:err})
        }
    })
})

app.post("/teacher/", (req,res)=>{
    let teacherarr = new Teacher({
        name: req.body.name,
        position:req.body.position,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    teacherarr.save()
    res.send({message:"success"})
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect("mongodb+srv://nahidzarbiyev:nahidzarbiyev@cluster0.hzrtup0.mongodb.net/?retryWrites=true&w=majority",(err)=>{
    if (!err) {
        app.listen(port, () => {
            console.log(`http://localhost:${port}`)
          })
    }
})