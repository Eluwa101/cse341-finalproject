const Order = require('../models/orderModel');

// CREATE ORDER
const createOrder = async (req, res) => {
  try {
    const { userId, products, totalPrice, status } = req.body;

    if (!userId || !products || products.length === 0 || !totalPrice) {
      return res.status(400).json({
        message: 'userId, products, and totalPrice are required'
      });
    }

    const newOrder = new Order({ userId, products, totalPrice, status });
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL ORDERS
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products'); // no userId populate
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE ORDER
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ORDER
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after', runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// DELETE ORDER
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
};