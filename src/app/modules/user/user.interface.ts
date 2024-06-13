/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
