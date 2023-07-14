const router = require('express').Router();
const { ProductTag } = require('../../models/ProductTag');

// Obtener todos los ProductTags
router.get('/', async (req, res) => {
  try {
    const productTags = await ProductTag.findAll();
    res.status(200).json(productTags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Crear un nuevo ProductTag
router.post('/', async (req, res) => {
  try {
    const newProductTag = await ProductTag.create(req.body);
    res.status(201).json(newProductTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Actualizar un ProductTag existente
router.put('/:id', async (req, res) => {
  try {
    const updatedProductTag = await ProductTag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updatedProductTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Eliminar un ProductTag
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductTag = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deletedProductTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;