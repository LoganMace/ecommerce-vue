const { getAllProducts } = require('./controllers/productsCtrl');

module.exports = app => {

  app.get('/api/products', getAllProducts);

};