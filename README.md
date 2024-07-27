# Product Management API

## Overview

This project is a RESTful API for managing products using Node.js, Express, and MongoDB. The API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on products.

## Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to build RESTful APIs.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/thamim-ansari/simple-mongodb-crud-api
   cd simple-mongodb-crud-api

2. **Install Dependencies:**

    Ensure you have Node.js installed. Then, install the necessary npm packages:

    ```
    npm install
    ```
3. **Set Up Environment Variables:**

    Create a .env file in the root directory of the project and add the following environment variables:
    ```
    PORT=3001
    MONGODBURI=mongodb://yourmongodburi
    ```
4. **Start the Application:**

    ```
    npm start
    ```
    The server will start running on http://localhost:3001.

## API Endpoints 
The following endpoints are available:

### Products 
* Get All Products

    ```
    GET /api/products
    ```
    Returns a list of all products.  

* Get a Product by ID
    ```
    GET /api/products/:id
    ```
    Returns a single product specified by its ID.

* Create a New Product
    ```
    POST /api/products
    ```
    Creates a new product. Requires a request body with name, quantity, price, and optionally image.  

* Update a Product by ID
    ```
    PUT /api/products/:id
    ```
    Updates the product specified by its ID. Requires a request body with updated name, quantity, price, and optionally image.  

* Delete a Product by ID
    ```
    DELETE /api/products/:id
    ```
    Deletes the product specified by its ID.  

## Project Structure
* `index.js`: Main entry point of the application. Sets up Express and MongoDB connection.
* `controllers/product.controller.js`: Contains handler functions for product-related operations.
* `models/product.model.js`: Defines the Mongoose schema and model for products.
* `routes/product.route.js`: Defines the routes and maps them to controller functions.  

## Environment Variables
* PORT: Port on which the server will listen.
* MONGODBURI: Connection string for the MongoDB database.
