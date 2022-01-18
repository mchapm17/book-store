const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./userRoutes')
const cartRoutes = require('./cart-routes')

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);

module.exports = router;