import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/logIn.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
      navigate('/profile');
    }
  }, [navigate]);

  const enterUsername = (event) => {
    setUsername(event.target.value);
  };

  const enterPassword = (event) => {
    setPassword(event.target.value);
  };

  const submitInfo = async (event) => {
    event.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
      localStorage.setItem('loggedIn', 'true'); 
            navigate('/main_page'); 
            console.log('logged-in')
    } else {
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className='login-page'>
      <div className='login-form'>
        <form onSubmit={submitInfo}>
          <label>
            Username:
            <input type="text" value={username} onChange={enterUsername} placeholder='Enter your username' />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={enterPassword} placeholder='Enter your password' />
          </label>
          <br />
          <button className='login-button' type="submit">Log In</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Link to="/registration">
          <p>Registration</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
