import { createStore, combineReducers } from 'redux';
import { alertReducer, empReducer } from './reducers';

const rootReducers = combineReducers({
  Emp: empReducer,
  Alert: alertReducer,
});

export default createStore(rootReducers);
