import jwt from 'jsonwebtoken';
import UsersModel from '../models/users.models';
import { IUser } from '../interfaces';
import connection from '../models/connection';

export default class UserService { 
  private usersModels: UsersModel;

  public JWT = jwt;
  
  constructor() {
    this.usersModels = new UsersModel(connection);
  }

  public async addUser(user: IUser) {
    const result = await this.usersModels.addUser(user);
    return result;
  }

  public async addUserToken(user: IUser) {
    const secret = process.env.JWT_SECRET || 'secret';
    const createToken = this.JWT.sign({
      id: user.id,
      username: user.username,
    }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return createToken;
  }
}
