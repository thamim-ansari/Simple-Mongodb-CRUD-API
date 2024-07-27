const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Middleware to parse JSON bodies and URL-encoded bodies (e.g., form submissions)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define the port from environment variables or default to 3001
const PORT = process.env.PORT || 3001;

// Connect to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGODBURI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Connection failed", error);
  });

// Define routes for product-related operations
app.use("/api/products", productRoute);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});