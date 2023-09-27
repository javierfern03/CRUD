//  requerimos express que es una libreria
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productsRouter = require('./routes/products.routes');

// iniciamos la aplicacion de express en la variable app
const app = express();

//1. MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requesTime = new Date();
  next();
});

//2. ROUTES
app.use('/api/v1/products', productsRouter);

//3.EXPORT app
module.exports = app;
