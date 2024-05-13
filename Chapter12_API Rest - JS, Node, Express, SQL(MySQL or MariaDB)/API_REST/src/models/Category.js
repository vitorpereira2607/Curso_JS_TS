import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Category extends Model{}

Category.init({
  categoryName: {
    field: 'categoryName',
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      msg: 'Category name already exist.',
    },
    validate: {
      notEmpty: {
        msg: 'Category field can not be empty.',
      },
    }
  },
},
{
  sequelize: sequelize,
  modelName: 'Category',
}
)

export default Category;
