const router = require('express').Router();
const { Product, Category } = require('../models');

router.get('/', async (req, res) => {
    try {
        const homeProducts = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['id'],
            },
            ]
        });
        const products = homeProducts.map((val) => val.get({ plain: true }));


        res.render('homepage', { products, logged_in: req.session.logged_in, user_id: req.session.user_id })
        console.log(req.session)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/checkout', async (req, res) => {
    try {
        // const homeProducts = await Product.findAll({

        //     include: [{
        //         model: Product,
        //         attributes: ['product_name', 'author', 'price'],
        //     }]
        // });
        // const product = homeProducts.get({ plain: true });

        res.render('checkout', {  })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        
        res.render('login', {  })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/cart', async (req, res) => {
    try {
        const homeProducts = await Product.findAll({

        });
        const products = homeProducts.map((val) => val.get({ plain: true }));
        res.render('cart', { products })
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;