const db = require('../models');
const Review = db.reviews;

// add data Reviews in API
exports.addReview = async (req, res) => {
    try {
        let review = await Review.create(req.body);
        res.status(200).json({data: review});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// getAllReviews
exports.getAllReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({})
        res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}