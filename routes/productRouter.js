const router = require('express').Router();
const productController = require('../controllers/productController.js');
const reviewController = require('../controllers/reviewController.js');

router.post('/create', productController.addProduct);

// review in each product
router.get('/getProductReview', productController.getProductReviews);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

// review
router.post('/addReview', reviewController.addReview);

router.get('/allReviews', reviewController.getAllReviews)


module.exports = router;