const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //  Mongoose 9+ ignores these legacy options and will throw in newer drivers.
    //      useNewUrlParser: true,
    //   useUnifiedTopology: true
    // Hence, the reason I kept it this way.
    
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
