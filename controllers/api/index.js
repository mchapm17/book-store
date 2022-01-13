const router = require('express').Router();
const categoryRoutes = require('../../routes/api/category-routes');
const productRoutes = require('../../routes/api/product-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
