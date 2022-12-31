  const express = require('express');
  const router = express.Router()
  const ProductsController = require("../Controller/ProductController")

  // C===Create
  router.post("/CreateProduct", ProductsController.CreateProduct)

  // R=== Read
  router.get("/ReadProducts", ProductsController.ReadProducts)

  // U=== UPdate
  router.post("/updateProduct/:id", ProductsController.updateProduct)

  // D == Delete
  router.get("/deleteProduct/:id", ProductsController.deleteProduct)





// export for app.js
  module.exports= router