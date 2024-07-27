const Product = require("../models/product.model.js");

// Handler to get all products
const getProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});
    // Respond with the list of products and a 200 status
    res.status(200).json(products);
  } catch (error) {
    // Respond with a 500 status and error message if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

// Handler to get a single product by ID
const getProduct = async (req, res) => {
  try {
    // Extract product ID from request parameters
    const { id } = req.params;
    // Fetch product by ID from the database
    const product = await Product.findById(id);
    
    // Respond with the product data if found
    if (product) {
      res.status(200).json(product);
    } else {
      // Respond with a 404 status if the product is not found
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // Respond with a 500 status and error message if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

// Handler to create a new product
const createProduct = async (req, res) => {
  try {
    // Create a new product using request body data
    const newProduct = await Product.create(req.body);
    // Respond with the created product and a 201 status
    res.status(201).json(newProduct);
  } catch (error) {
    // Respond with a 500 status and error message if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

// Handler to update an existing product by ID
const updateProduct = async (req, res) => {
  try {
    // Extract product ID from request parameters
    const { id } = req.params;
    // Update the product with the provided data
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

    // Check if the product was found and updated
    if (product) {
      // Respond with the updated product data and a 200 status
      res.status(200).json(product);
    } else {
      // Respond with a 404 status if the product is not found
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // Respond with a 500 status and error message if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

// Handler to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    // Extract product ID from request parameters
    const { id } = req.params;
    // Delete the product from the database
    const product = await Product.findByIdAndDelete(id);

    // Check if the product was found and deleted
    if (product) {
      // Respond with a success message and a 200 status
      res.status(200).json({ message: "Product deleted" });
    } else {
      // Respond with a 404 status if the product is not found
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // Respond with a 500 status and error message if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};