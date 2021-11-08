const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const connect = ()=>{
    return mongoose.connect("mongodb+srv://pavanc1997:mDur37JmGtHAbLsp@cluster0.cryyf.mongodb.net/Kepnitz?retryWrites=true&w=majority")
}

const productSchema =  new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number,required:true},
    desc1:{type:String, required:true},
    desc2:{type:String,required:true},
    desc3:{type:String,required:true}

},{
    versionKey:false
})

const Product =  mongoose.model("product",productSchema);

//crud operations;

app.post("/products", async function(req,res){
    try{
        const prod = await Product.create(req.body);
        return res.status(200).send(prod);
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})

app.get("/products",async function(req,res){
    try{
        const prod = await Product.find().lean().exec();
        return res.status(200).send(prod)
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})

app.get("/products/productspage/:id",async function(req,res){
    try{
        const prod = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(prod)
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})


app.listen(8000, async()=>{
    await connect()
    console.log('listening on port 8000')
})