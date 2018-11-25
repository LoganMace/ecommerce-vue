const { getAllProducts, getProductByCategory, getProductById } = require('./controllers/productsCtrl');

module.exports = app => {

  app.get('/api/products', getAllProducts);
  app.get('/api/products/:category', getProductByCategory);
  app.get('/api/product/:id', getProductById);

};