const express = require("express");
const router = express.Router(); // Create a new router object from Express

// Import the controller functions for product operations
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Define route to get a list of all products
router.get("/", getProducts);

// Define route to get a single product by its ID
router.get("/:id", getProduct);

// Define route to create a new product
router.post("/", createProduct);

// Define route to update an existing product by its ID
router.put("/:id", updateProduct);

// Define route to delete a product by its ID
router.delete("/:id", deleteProduct);

// Export the router object to be used in other parts of the application
module.exports = router;