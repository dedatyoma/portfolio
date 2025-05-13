const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/random', productController.getRandomProducts);

router.get('/category/:category', productController.getProductsByCategory);

router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
