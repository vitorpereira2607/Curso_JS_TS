import User from "../models/User";

class UserController {

  // create user
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  // get all users
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'username', 'name', 'surname', 'email', 'photo']});
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // get user by id
  async show(req, res) {
    try {
      const user = await User.findByPk(req.id);
      const { id, username, name, surname, email, photo} = user;

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user.']
        });
      }

      return res.json({id, username, name, surname, email, photo});
    } catch (e) {
      return res.json(null);
    }
  }

  // update user
  async update(req, res) {
    try {
      const user = await User.findByPk(req.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user.']
        });
      }

      const updatedUser = await user.update(req.body);
      const { id, username, name, surname, email, photo} = updatedUser;

      return res.json({id, username, name, surname, email, photo});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  // delete user
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.id);

      if(!user) return res.status(400).json({
        errors: ['Missing user']
      })

      const deletedUser = await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.json({
        errors: e.errors.map(err => err.message),
      });
    }

  }
}

export default new UserController();
