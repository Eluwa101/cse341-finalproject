const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Final Project API',
    description: 'API documentation for the final project'
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Local development"
    },
    {
      url: "https://cse341-finalproject-jeql.onrender.com",
      description: "Production"
    }
  ],

  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Enter JWT as: Bearer <token>"
    }
  }
};

const outputFile = './docs/swagger.json';
const endpointsFiles = [
  './routes/index.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc);