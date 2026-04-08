const Review = require('../models/reviewModel');

// CREATE REVIEW
const createReview = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;

    if (!userId || !productId || !rating || !comment) {
      return res.status(400).json({
        message: 'userId, productId, rating, and comment are required'
      });
    }

    const newReview = new Review({ userId, productId, rating, comment });
    const savedReview = await newReview.save();

    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL REVIEWS
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate('productId'); // optional: populate product only

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE REVIEW
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('productId');

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE REVIEW
const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE REVIEW
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview
};