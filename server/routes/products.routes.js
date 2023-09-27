const express = require('express');

const productsController = require('./../controllers/producst.controller');
const productsMiddleware = require('./../middlewares/products.middleware');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(productsMiddleware.validProducts, productsController.createProducts);

router
  .route('/:id')
  .get(productsMiddleware.validExistProduct, productsController.findOneProducts)
  .patch(
    productsMiddleware.validExistProduct,
    productsMiddleware.validProducts,
    productsController.updateProducts
  )
  .delete(
    productsMiddleware.validExistProduct,
    productsController.deleteProducts
  );

module.exports = router;
