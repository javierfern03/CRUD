const { db } = require('../database/config');
const Product = require('../models/products.model');

exports.findAllProducts = async (req, res) => {
  const { requesTime } = req;

  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'The query has been done successfully',
    requesTime,
    result: products.length,
    products,
  });
};

exports.findOneProducts = async (req, res) => {
  const { product } = req;

  res.json({
    status: 'success',
    message: 'the query has been done successfully',
    product,
  });
};

exports.createProducts = async (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  const product = await Product.create({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(201).json({
    Status: 'success',
    message: 'the Product has been created',
    product,
  });
};

exports.updateProducts = async (req, res) => {
  const { product } = req;

  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  await product.update({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(200).json({
    status: 'success',
    message: 'the product has been updated',
  });
};

exports.deleteProducts = async (req, res) => {
  try {
    const { product } = req;

    await product.update({
      status: false,
    });

    res.status(200).json({
      status: 'Success',
      message: `The product with id ${product.id} has been delete seccessfully`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
    });
  }
};
