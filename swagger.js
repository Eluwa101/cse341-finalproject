const swaggerAutogen = require('swagger-autogen')();

const doc = {
  swagger: "2.0",

  info: {
    title: 'CSE341 Final Project API',
    description: 'API documentation for the final project'
  },

  host: "cse341-finalproject-jeql.onrender.com",
  basePath: "/",
  schemes: ["https"],

  servers: [
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