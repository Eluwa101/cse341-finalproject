const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Final Project API',
    description: 'API documentation for the final project'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './docs/swagger.json';
const endpointsFiles = [
  './routes/index.js',
  './routes/collection1Routes.js',
  './routes/collection2Routes.js',
  './routes/authRoutes.js'
]; 

swaggerAutogen(outputFile, endpointsFiles, doc);