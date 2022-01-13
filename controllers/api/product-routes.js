const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {

  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['category_name']
        }]
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all products
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Category,
          attributes: ['category_name']
        }
      ]
    });

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', async (req, res) => {

  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
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
