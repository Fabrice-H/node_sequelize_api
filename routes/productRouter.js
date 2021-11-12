const router = require('express').Router();
const productController = require('../controllers/productController.js');
const reviewController = require('../controllers/reviewController.js');

router.post('/create', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;