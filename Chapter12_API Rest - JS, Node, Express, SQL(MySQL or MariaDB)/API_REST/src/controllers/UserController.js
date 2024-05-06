import User from "../models/User";

class UserController {

  // create user
  async store(req, res) {
    try {
      console.log(User);
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
      const users = await User.findAll()
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // get user by id
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing id.']
        });
      }

      const userByID = await User.findByPk(id);
      return res.json(userByID);
    } catch (e) {
      return res.json(null);
    }
  }

  // update user
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing id.']
        });
      }

      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Missing user.']
        });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if(!id) return res.status(400).json({
        errors: ['Missing id']
      })

      const user = await User.findByPk(id);

      if(!user) return res.status(400).json({
        errors: ['Missing user']
      })

      const deletedUser = await user.destroy();

      return res.json(deletedUser);
    } catch (e) {
      return res.json('Error deleting user');
    }

  }
}

export default new UserController();
