import { IUserActionModel, IUser } from '../model';
import { ADD_USER, DELETE_USER } from './ActionType';

const initalState: IUser[] = [
  { name: 'tom', repos: 1 },
  { name: 'jack', repos: 1 },
];

const userReducers = (state = initalState, action: IUserActionModel) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case DELETE_USER:
      const { name } = payload;
      return state.filter((e) => e.name !== name);
    default:
      return state;
  }
};
export default userReducers;
