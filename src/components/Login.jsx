import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      if (response.status === 200) {
        // Update this as needed based on your response data structure
        // Assuming you get a token back and want to store it in local storage
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard'); // Update this to the path of your logged in user page
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
