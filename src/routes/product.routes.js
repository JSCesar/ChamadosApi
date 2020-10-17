const router = require('express-promise-router');
const productRouter = require('express-promise-router')();
const productController = require('../controllers/product.controller');

productRouter.post('/products', productController.createProduct);
productRouter.get('/products', productController.listAllProducts);
productRouter.get('/products/:id', productController.listProductById);

module.exports = productRouter;