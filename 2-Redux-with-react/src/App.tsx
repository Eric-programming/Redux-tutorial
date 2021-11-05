import { Provider } from 'react-redux';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';
import { store } from './Redux/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AddUser />
        <UsersList />
      </Provider>
    </>
  );
}

export default App;
