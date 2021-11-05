import { Employee } from './model';
import { addAlert, addEmp, removeAlert, removeEmp } from './redux/actions';
import store from './redux/store';

console.log('store', store.getState());

const unSub = store.subscribe(() =>
  console.log('Current Store:', store.getState())
);

store.dispatch(addEmp(new Employee('Eric', 'SDE II')));
store.dispatch(addAlert('Alert is working'));
store.dispatch(addEmp(new Employee('Tom', 'SDE')));
store.dispatch(removeEmp(0));
store.dispatch(removeAlert());

unSub();
