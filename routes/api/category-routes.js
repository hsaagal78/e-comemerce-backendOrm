const router = require('express').Router();
// const { canTreatArrayAsAnd } = require('sequelize/types/lib/utils');
const { Category } = require('../../models/Category');
// const { sync, findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    // be sure to include its associated Products. done
    const categories = await Category.findAll({inclue: Product});
    res.json(categories);
  }catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  
 
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value. // be sure to include its associated Products done
  try {
    const category = await Category.findByPk(req.params.id, { include: Product});
    if (!category) return res.status(404).json({ message: 'Category not found'});
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {
  // create a new category done
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value done
  try{
    const category= await Category.update(req.body,{
      where:{
        id: req.params.id
      }
    });
    if(!category[0]){
      res.status(404).json({message: 'Category not found'});
    }else {
      res.json({ message: 'Category update successfully'});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value done
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!category){
      res.status(404).json({ message: 'Category not found'});
    } else {
      res.json({ message: 'Category deleted successfully'});
    }
  }catch (err){
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
