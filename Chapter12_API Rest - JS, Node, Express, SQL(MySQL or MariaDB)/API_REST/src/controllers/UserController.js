import User from '../models/User';

class UserController {
  async index (req, res) {
    const newUser = await User.create({
      username: 'new_user',
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      photo: 'path_to_photo.jpg'
    });
    res.json(newUser);
  }
}

export default new UserController();
