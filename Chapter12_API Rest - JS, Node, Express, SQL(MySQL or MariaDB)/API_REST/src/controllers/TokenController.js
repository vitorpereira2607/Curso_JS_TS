import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

class TokenController {

  async store(req, res) {

    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials.']
      })
    }

    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exit.']
      })
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Invalid password.']
      })
    }

    const token = jwt.sign({ id: user.id, email: email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({ token: token });
  }
}

export default new TokenController();
