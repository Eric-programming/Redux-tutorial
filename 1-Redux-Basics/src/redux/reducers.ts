/**
 * Reducer is a function that takes state and action as argument and
 * return the updated state
 */

import { ADD_ALERT, ADD_EMP, REMOVE_ALERT, REMOVE_EMP } from '../constants';
import { Employee } from '../model';

interface IEmpAction {
  type: string;
  payload: Employee | any;
}
interface IAlertAction {
  type: string;
  payload?: string;
}

export const empReducer = (state = [], action: IEmpAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EMP:
      return [...state, payload];
    case REMOVE_EMP:
      return state.filter((e: any) => e.id !== payload.id);
    default:
      return state;
  }
};

export const alertReducer = (state: string[] = [], action: IAlertAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALERT:
      if (payload) {
        state.push(payload);
      }
      return state;
    case REMOVE_ALERT:
      state.shift();
      return state;
    default:
      return state;
  }
};
