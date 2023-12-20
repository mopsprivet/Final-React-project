import React, { useState } from 'react';
import '../css/registration.css'; 


const RegistrationPage = () => { 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const enterFirstname = (event) => {
    setFirstname(event.target.value);
  }; 

  const enterLastname = (event) => {
    setLastname(event.target.value);
  };

  const enterUsername = (event) => {
    setUsername(event.target.value);
  };

  const enterEmail = (event) => {
    setEmail(event.target.value);
  };

  const enterPassword = (event) => {
    setPassword(event.target.value);
  };

  const submitCalories = (event) => {
    event.preventDefault();

    if (username && email && password) {
      setRegistered(true);

      const userData = { 
        firstname, 
        lastname, 
        username,
        email,
        password,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className='register-page'>
      <div className='register-form'>
        <form onSubmit={submitCalories}> 
          <label>
            First name:
            <input type='fname' value={firstname} onChange={enterFirstname} placeholder='Enter your name' />
          </label>
          <br /> 
          <label>
            Last name:
            <input type='lname' value={lastname} onChange={enterLastname} placeholder='Enter your lastname' />
          </label>
          <br />
          <label>
            Username:
            <input type='username' value={username} onChange={enterUsername} placeholder='Enter your username' />
          </label>
          <br />
          <label>
            Email:
            <input type='email' value={email} onChange={enterEmail} placeholder='Enter your email' />
          </label>
          <br />
          <label>
            Password:
            <input type='password' value={password} onChange={enterPassword} placeholder='Enter your password' />
          </label>
          <br />
          <button className='register-button' type='submit'>
            Register
          </button>
        </form>
        {registered && <p style={{ color: 'green' }}>Registration successful!</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
