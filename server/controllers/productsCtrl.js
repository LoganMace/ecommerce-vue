getAllProducts = (req, res) => {
  req.app.get('db')
    .products.get_all_products()
      .then(response => console.log(response) || res.status(200).json(response))
      .catch(err => console.log(err));
}

module.exports = {
  getAllProducts
};