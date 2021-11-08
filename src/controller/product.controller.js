const jwt = require("jsonwebtoken");
const express = require('express');

const router = express.Router();

const Product = require('../model/product.model');

router.post("/", async function (req, res) {
    try {
        const prod = await Product.create(req.body)
        return res.status(200).send(prod);
    }
    catch (err)
    {
        return res.status(400).send(err.message);
    }
})

router.get("/", async function (req, res) {
    try
    {
        const prods = await Product.find().lean().exec();
        return res.status(201).send(prods);
    }
    catch (err)
    {
        return res.status(400).send(err.message);
    }
})

router.get("/:id", async function (req, res) {
    try
    {
        const prods = await Product.findById(req.params.id).lean().exec();
        return res.status(201).send(prods);
    }
    catch (err)
    {
        return res.status(400).send(err.message);
    }
})

module.exports = router;