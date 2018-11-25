getAllProducts = (req, res) => {
  req.app.get('db')
    .products.get_all_products()
      .then(response => console.log(response) || res.status(200).json(response))
      .catch(err => console.log(err));
};

getProductByCategory = (req, res) => {
  req.app.get('db')
    .products.get_product_by_category(req.params.category)
      .then(response => console.log(response) || res.status(200).json(response))
      .catch(err => console.log(err));
};

getSpecificCategory = (req, res) => {
  req.app.get('db')
    .products.get_specific_category(req.params.category)
      .then(response => console.log(response) || res.status(200).json(response))
      .catch(err => console.log(err));
};

getProductById = (req, res) => {
  req.app.get('db')
    .products.get_product_by_id(req.params.id)
      .then(response => console.log(response) || res.status(200).json(response))
      .catch(err => console.log(err));
};

module.exports = {
  getAllProducts,
  getProductByCategory,
  getSpecificCategory,
  getProductById
};