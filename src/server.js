const express = require("express");
const cors = require("cors")
const connect = require("./config/db");

const { signin, signup } = require("./controller/auth.controller");
const productController = require('./controller/product.Controller');
const cartController = require('./controller/cart.Controller');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", signup);
app.post("/signin", signin);

app.use('/prod', productController);
app.use('/cart', cartController);

const start = async () => {
  await connect();
  app.listen(8000, () => {
    console.log("listing to port 8000");
  });
};

module.exports = start;



// const express = require("express");

// const app = express();



// const { signin, signup } = require("./controller/auth.controller");

// app.use(express.json());

// const connect = require("./config/db");

// app.post("/signup", signup);
// app.post("/signin", signin);

// const start = async () => {
//   await connect();
//   app.listen(8000, () => {
//     console.log("listing to port 8000");
//   });
// };

// module.exports = start;