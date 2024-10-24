import { useReducer, useState } from 'react';
import loginReducer from '../reducers/loginReducer';

const Login  = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

const [username] = useState<string>('It was me! DIO');

const [login, dispatch] = useReducer(loginReducer, '')

  // Handle login
  const handleLogin = () => {
  dispatch({type: 'LOGIN', username})
  };

  // Handle logout
  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {login ? (
        <div>
          <h2>{username}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;