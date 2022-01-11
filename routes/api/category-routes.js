const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      // include: [
      //   {
      //     model: Category,
      //     attributes: ['category_name']
      //   }, 
      //   {
      //     model: Tag,
      //     attributes: [Tag_name]
      //   }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      where: {
        id: req.params.id
      },
      // include: [
      //   {
      //     model: Category,
      //     attributes: ['category_name']
      //   }, 
      //   {
      //     model: Tag,
      //     attributes: [Tag_name]
      //   }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
 Category.create(req.body)
  .then((category) => {
    if (req.body.tagIds.length) {
      const categoryTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          category_id: category.id,
          tag_id,
        };
      });
      return CategoryTag.bulkCreate(categoryTagIdArr);
    }
    res.status(200).json(category);
  })
  .then((categoryTagIds) => res.status(200).json(categoryTagIds))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', async(req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      return categoryTag.findAll({ where: { category_id: req.params.id } });
    })
    .then((categoryTags) => {
      const categoryTagIds = categoryTags.map(({ tag_id }) => tag_id);
      const newCategoryTags = req.body.tagIds
        .filter((tag_id) => !categoryTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            category_id: req.params.id,
            tag_id,
          };
        });
      const categoryTagsToRemove = categoryTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      return Promise.all([
        CategoryTag.destroy({ where: { id: categoryTagsToRemove } }),
        CategoryTag.bulkCreate(newCategoryTags),
      ]);
    })
    .then((updatedCategoryTags) => res.json(updatedCategoryTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await category.destroy({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
