const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false
    },
    
    productId: { type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    
    quantity: { type: Number, required: true },

}, {
    versionKey: false
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;