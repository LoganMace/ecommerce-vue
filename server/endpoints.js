const { getAllProducts } = require('./controllers/productsCtrl');

module.exports = app => {

  app.get('/api/products', getAllProducts);

  app.get('/api/products/:category', getProductByCategory);

};