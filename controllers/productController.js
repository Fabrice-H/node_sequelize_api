const db = require('../models');

const Product = db.products;
const Review = db.reviews;

// Add data Product in API
exports.addProduct = async (req, res) => {
    try {
        let product = await Product.create({
            ...req.body,
            published: req.body.published ? req.body.published : false
        });
        res.status(200).json({ message: "Product create successfully", product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// get All Data Product From Api
exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.findAll({});
        res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// get single Data Product From Api
exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findOne({ where: { id: id } });
        res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// update one product by id
exports.updateProduct = async (req, res) => {
    try {
        let {id} = req.params
        let product = await Product.update(req.body, { where: { id: id } });
        res.status(200).json({message: "Product update successfully", product});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// delete one product by id
exports.deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        await Product.destroy({ where: { id: id } });
        res.status(200).json({ message: 'Product deleted successfully!' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// get published product
exports.getPublishedProduct = async (req, res) => {
    try {
        let product = await Product.findAll({ where: { published: true } });
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// all product reviews
exports.getProductReviews = async (req, res) => {
    try {
        const data = await Product.findAll({
            include: [{ model: Review, as: 'review' }],
            where: { id: 2 }
        });

        res.status(200).send(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}