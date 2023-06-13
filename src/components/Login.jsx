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
        const response = await axios.post('http://localhost:5000/login', { email, password });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            onLogin(response.data.name);
            navigate('/home');
        }
    } catch (error) {
        alert('Please check your email and password.');
        console.error(error);
    }
};
return (
  <div className="login-container">
    <h1 className="login-title">Login</h1>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="input-label">
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="input-field" />
      </label>
      <label className="input-label">
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="input-field" />
      </label>
      <button type="submit" className="login-button">Login</button>
    </form>
    <div>
      <h2><a href="/registerorlog">New user ? click here</a></h2>
    </div>
  </div>
);
}

export default LoginPage;