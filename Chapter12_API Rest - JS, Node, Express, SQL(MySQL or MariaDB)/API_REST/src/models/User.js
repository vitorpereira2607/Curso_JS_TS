import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import sequelize from '../config/database'

class User extends Model {
  static async beforeSave(user) {
    if (user.password) {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    }
  }
}

User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Username field can not be empty.',
        },
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Name field can not be empty.',
        },
      },
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Surname field can not be empty.',
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        isEmail: {
          msg: 'Invalid Email.',
        },
      },
    },
    password_hash: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    password: {
      type: Sequelize.VIRTUAL,
      allowNull: false,
      defaultValue: '',
      validate: {
        len: {
          args: [5, 15],
          msg: 'Password must contain between 5 and 15 characters.',
        },
      },
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'Photo field can not be empty.',
        },
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

// Hook for beforeSave
User.addHook('beforeSave', User.beforeSave);

export default User;
