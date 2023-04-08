import jwt from 'jsonwebtoken';
import LoginModels from '../models/login.models';
import { ILogin } from '../interfaces';
import connection from '../models/connection';

export default class LoginServices {
  private loginModels: LoginModels;

  public JWT = jwt;
  
  constructor() {
    this.loginModels = new LoginModels(connection);
  }

  public async login({ username }: ILogin) {
    const result = await this.loginModels.login(username);
    return result;
  }

  // public async loginToken(username: string) {
  //   const secret = process.env.JWT_SECRET || 'secret';
  //   const createToken = this.JWT.sign({ username }, secret, {
  //     expiresIn: '7d',
  //     algorithm: 'HS256',
  //   });
  //   return createToken;
  // }
}