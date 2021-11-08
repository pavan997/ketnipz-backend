const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Cart = require("../model/cart.model");
const router = express.Router();

//------------CRUD operations for Cart------------


//post route
router.post("/", async function (req, res) {
    try {
        const x = await Cart.findOne({ productId: req.body.productId })
        if (x !== null) {
           const prod= await Cart.findByIdAndUpdate(x._id,{ quantity: x.quantity + req.body.quantity },{new:true})
                    return res.status(200).send(prod);
        }
        // console.log(prod,"prod")
        const prod = await Cart.create(req.body);
        return res.status(200).send(prod);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

//get route
router.get("/", async function (req, res) {
    try{
        const prod = await Cart.find().populate("productId").lean().exec();
        return res.status(200).send(prod);
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

// get /prod/:id
router.get("/:id", async function (req, res) {
    try
    {
        const prods = await Cart.findById(req.params.id).lean().exec();
        return res.status(201).send(prods);
    }
    catch (err)
    {
        return res.status(400).send(err.message);
    }
})


// delete /prod/:id
router.delete("/:id", async function (req, res) {
    try {
        const user = await Cart.findByIdAndDelete(req.params.id).lean();
     return res.status(200).send(user);
    } catch {
        return res.status(400).send(err.message);
    }
    
})

module.exports = router