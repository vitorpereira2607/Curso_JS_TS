import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Category from './Category';
import User from './User';

class Project extends Model{}

Project.init({
  projectName: {
    field: 'projectName',
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      msg: 'Project name already exist.',
    },
    validate: {
      notEmpty: {
        msg: 'Project field can not be empty.',
      },
      len: {
        args: [5, 30],
        msg: 'Project must contain between 5 and 30 characters.',
      }
    }
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
    unique: {
      msg: 'Link already exist.',
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Description field can not be empty.',
      },
      len: {
        args: [5, 250],
        msg: 'Description must contain between 5 and 250 characters.',
      }
    }
  },
  categoryId: {
    field: 'categoryId',
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    field: 'userId',
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},
{
  sequelize: sequelize,
  modelName: 'Project',
}
)

// Project.belongsTo(Category, { foreignKey: 'categoryId'})
// Project.belongsTo(User, { foreignKey: 'userId' })

export default Project;
