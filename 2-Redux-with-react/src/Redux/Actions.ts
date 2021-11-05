import { IUser } from '../model';
import { ADD_USER, DELETE_USER } from './ActionType';

export const addUserAction = (user: IUser) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const removeUserAction = (name: string) => {
  return { type: DELETE_USER, payload: { name } };
};
