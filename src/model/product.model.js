const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc1: { type: String, required: true },
    desc2: { type: String, required: true },
    desc3: {type: String, required: true}
}, {
    versionKey: false
})

/////// Model /////////////
const Product = new mongoose.model("product", productSchema);

module.exports = Product;