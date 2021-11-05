import { ADD_ALERT, ADD_EMP, REMOVE_ALERT, REMOVE_EMP } from '../constants';
import { Employee } from '../model';

/**
 * Action send data from app component to the store
 */

export const addEmp = (emp: Employee) => {
  return { type: ADD_EMP, payload: emp };
};

export const removeEmp = (id: number) => {
  return { type: REMOVE_EMP, payload: { id } };
};

export const addAlert = (alert: string) => {
  return { type: ADD_ALERT, payload: alert };
};
export const removeAlert = () => {
  return { type: REMOVE_ALERT, payload: null };
};
