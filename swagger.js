const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    title: 'CSE341 Final Project API',
    description: 'API documentation for the final project'
  },
  host: 'cse341-finalproject-jeql.onrender.com',
  schemes: ['https'],
  basePath:'/'
};



const outputFile = './docs/swagger.json';
const endpointsFiles = [
  './routes/index.js'
  // './routes/usersRoutes.js',
  // './routes/productsRoutes.js',
  // './routes/ordersRoutes.js',
  // './routes/reviewsRoutes.js',
  // './routes/authRoutes.js'
]; 

swaggerAutogen(outputFile, endpointsFiles, doc);