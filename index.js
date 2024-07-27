const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies (for forms)
require('dotenv').config();
const PORT = process.env.PORT||3001;

mongoose
  .connect(
    process.env.MONGODBURI
  )
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`)
})



  //routes

  app.use("/api/products", productRoute);