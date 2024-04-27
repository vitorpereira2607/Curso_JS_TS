import User from "../models/User";

class UserController {
  async store (req, res) {
    try {
      console.log(User);
      const newUser = await User.create({
        username: 'vitorpereira222',
        name: 'Vitor',
        surname: 'Pereira',
        email: 'vitorpereira@test.test',
        password: '12345',
        photo: 'sdahu.png'
      });
      res.json(newUser);
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserController();
