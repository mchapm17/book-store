const router = require('express').Router();
const { User, Cart, Product } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        const cartData = await Cart.findOne({
            where: {
                user_id: req.params.id,
            },
            include: [{
                model: Product,
                attributes: ['id'],
            }, {
                model: User,
                attributes: ['id'],
            }],
        });
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.post('/:id', async (req, res) => {
    console.log(req.body)
    try {
        // let cartData = await Cart.findOne({
        //     where: {
        //         user_id: req.session.user_id,
        //     },
        //     include: [
        //         {
        //             model: Product,
        //             where: {
        //                 id: req.body.product_id,
        //             }
        //         }]
        // });

        // if (!cartData) {
            console.log('*******!!!!***************************')
            cartData = await Cart.create({
                user_id: req.session.user_id,
                product_id: req.body.product_id,
            });
            console.log(cartData);
        // } else {
        //     cartData = await Cart.update({
        //         product_id: req.body.product_id,
        //     });
        // }
        res.status(200).json(cartData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const cartData = await Cart.destroy({
            where: {
                user_id: req.params.id
            },
        });
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;