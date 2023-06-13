import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://charmcart-backend.onrender.com/userregistration', { name, email, password });
      console.log(response.data);


      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div>
      <img className='background' src="/assets/images/background.webp" alt="background" />
      <div className="user-image-container">
        <img className="userimg" src="/assets/images/user.jpg" alt="user img" />
      </div>
      <div className="main-container">
        <div className="content-wrap"></div>
        <div className="form">
          <h1 className='create-account'>Create account</h1>
          <img className='head' src="assets/images/head.png" height={"70px"} alt="person-head" />
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>

            <label>
              Password:
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
