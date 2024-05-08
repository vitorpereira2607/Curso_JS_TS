import Category from "../models/Category";


class Category {
  async index(req, res) {
    const category = await category.findAll();

    if(!category){
      return res.status(401).json({
        errors: ['Users not found'];
      })
    }

    return res.json(category);
  }
}

export default new Category();
