import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constants';

export const signToken = (id: string, login: string) => {
  return jwt.sign({ id, login }, SECRET_KEY, { expiresIn: '720m' });
}

export const checkToken = (token: string) => {
  try {
    console.log('JWT token', token);
    jwt.verify(token, SECRET_KEY);
    console.log('veryfied', token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
}