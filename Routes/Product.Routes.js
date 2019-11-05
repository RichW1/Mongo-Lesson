const express = require(`express`);
const router = express.Router();
const productController = require(`../Controllers/Product.Controller`);

router.get(`/test`, productController.test);

router.post(`/`, productController.create);

// Get all of the products in our database
router.get(`/`, productController.getProducts);

// Update a specific product
router.put(`/:id`, productController.updateProduct);

// Delete a specific product


module.exports = router;
