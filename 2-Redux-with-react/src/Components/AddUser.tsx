import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from '../model';
import { addUserAction } from '../Redux/Actions';
import axios from 'axios';

const init: IUser = {
  name: '',
  repos: 0,
};

const AddUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(init);

  const updateInput = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${state.name}`
      );
      dispatch(addUserAction({ ...state, repos: data.public_repos }));
      setState(init);
    } catch (error) {
      console.log('error', error);
      alert('Fail to fetch this user');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            onChange={(e) => updateInput(e)}
            value={state.name}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddUser;
