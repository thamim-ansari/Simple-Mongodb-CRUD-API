const mongoose = require("mongoose");

// Define the schema for the Product model
const ProductSchema = mongoose.Schema(
  {
    // The 'name' field for the product
    name: {
      type: String,
      required: [true, "Please enter product name"], // The product name is required with a custom error message
    },
    // The 'quantity' field for the product
    quantity: {
      type: Number,
      required: true, // The quantity is required
      default: 0, // Default value is 0 if not provided
    },
    // The 'price' field for the product
    price: {
      type: Number,
      required: true, // The price is required
      default: 0, // Default value is 0 if not provided
    },
    // The 'image' field for the product
    image: {
      type: String,
      required: false, // The image is optional
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the Product model using the defined schema
const Product = mongoose.model("Product", ProductSchema);

// Export the Product model for use in other parts of the application
module.exports = Product;