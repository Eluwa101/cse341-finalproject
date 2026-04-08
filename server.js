const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Main routes
app.get('/', (req, res) => {
  res.send('Our API is running...');
});

app.use('/users', require('./routes/usersRoutes'));
app.use('/products', require('./routes/productsRoutes'));
app.use('/orders', require('./routes/ordersRoutes'));
app.use('/reviews', require('./routes/reviewsRoutes'));
app.use('/auth', require('./routes/authRoutes'));

//Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});