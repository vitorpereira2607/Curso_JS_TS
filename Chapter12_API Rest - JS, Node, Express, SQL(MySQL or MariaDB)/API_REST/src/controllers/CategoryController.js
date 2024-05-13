import Category from "../models/Category";

class CategoryController {

  async index(req, res) {
    try {
      const categories = await Category.findAll({ attributes: ['id', 'categoryName'] });
      return res.json(categories);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      const { id, categoryName } = category;

      if (!category) {
        return res.status(401).json({
          errors: ['Missing id']
        })
      }

      return res.json({ id, categoryName });

    } catch (e) {
      return res.json(null)
    }
  }

  async store(req, res) {
    try {
      const category = await Category.create(req.body);
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
  }

  async update(req, res){
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category){
        res.status(401).json({
          errors: ['Missing category.']
        })
      }

      const updatedCategory = await category.update(req.body);
      const { id, categoryName } = updatedCategory;

      return res.json({ id, categoryName });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if(!category) return res.status(400).json({
        errors: ['Missing id']
      })

      const deletedCategory = await category.destroy();

      return res.json({
        Message: 'Category deleted successfully'
      });
    } catch (e) {
      return res.json({
        errors: e.errors.map(err => err.message),
      });
    }

  }
}

export default new CategoryController();
