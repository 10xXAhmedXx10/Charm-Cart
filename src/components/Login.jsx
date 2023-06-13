import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post(
        'https://charmcart-backend.onrender.com/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        onLogin(response.data.name);
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        
        console.error('Error Data:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);
      } else if (error.request) {
        
        console.error('Error Request:', error.request);
      } else {
        
        console.error('Error Message:', error.message);
      }
      alert('Please check your email and password. also please make sure you are choosing the right type of account');
    }
  };

  
  const handleBusinessLogin = async (email, password) => {
    try {
      const response = await fetch('https://charmcart-backend.onrender.com/businesslogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        
        localStorage.setItem('role', data.role);
       
        onLogin(data.name);
        navigate('/home');
      } else {
        
        console.error('Login failed:', data.alert);
        alert('Invalid email or password. please make sure you are choosing the right type of account');
      }
    } catch (error) {
      console.error('Error during business login:', error);
    }
  };


  const handleClick = () => {
    navigate('/registerorlog');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <label className="input-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
        <button
          type="button"
          className="business-login-button"
          onClick={() => handleBusinessLogin(email, password)}
        >
          Business Login
        </button>
      </form>
      <div>
      
        <button class="button user" onClick={handleClick}>New user? Click here</button>


        
      </div>
    </div>
  );
}

export default LoginPage;
