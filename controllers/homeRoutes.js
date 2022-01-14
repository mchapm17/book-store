const router = require('express').Router();
const { Product, Category } = require('../models');

router.get('/', async (req, res) => {
    try {
        const homeProducts = await Product.findAll({

            include: [{
                model: Product,
                attributes: ['product_name', 'author', 'price'],
            },
            {
                model: Category,
                attributes: ['id'],
            }]
        });
        const product = homeProducts.get({ plain: true });


        res.render('homepage', { product })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/checkout', async (req, res) => {
    try {
        const homeProducts = await Product.findAll({

            include: [{
                model: Product,
                attributes: ['product_name', 'author', 'price'],
            }]
        });
        const product = homeProducts.get({ plain: true });

        res.render('checkout', { product })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/cart', async (req, res) => {
    try {
        const homeProducts = await Product.findAll({

            include: [{
                model: Product,
                attributes: ['product_name', 'author', 'price'],
            }]
        });
        const product = homeProducts.get({ plain: true });

        res.render('cart', { product })
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;