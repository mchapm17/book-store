const router = require('express').Router();
const { Product, Category } = require('../../models');

// create new product in cart
router.post('/cart', async (req, res) => {

  Product.create(req.body)
  
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/cart', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
