import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IUser } from '../model';
import userReducers from './Reducer';
const reducers = combineReducers({ users: userReducers });
export const store = createStore(reducers, composeWithDevTools());

export interface IRootState {
  users: IUser[];
}
