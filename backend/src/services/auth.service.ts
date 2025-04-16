import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { User } from '../models/user.model';

export class AuthService {
  static async register(username: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    return user;
  }

  static async login(username: string, password: string) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, {
      expiresIn: '2h'
    });
    return { token, user };
  }
}