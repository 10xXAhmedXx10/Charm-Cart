import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
function Businessregistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [productType, setproductType] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/businessregister', { name, email, password, productType });

  
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img className='background' src="/assets/images/techbackground.jpeg" alt="background" />
      <div className="business-image-container">
        <img className="businessimg" src="/assets/images/business.webp" alt="user img" />
      </div>
      <div className="main-container">
        <div className="content-wrap"></div>
      <div className="form">
        <h1 className='create-account'>Create account</h1>
        <img className='head' src="/assets/images/businesshead.svg" height={"70px"} alt="person-head" />
        <form onSubmit={handleSubmit}>
          <label>
            Business Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>

          <label>
            Business Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>

          <label>
            Business Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>

          <label className='typeofproduct'>
            Type of Product You Are Selling:
            <br />
            <select className='select' value={productType} onChange={e => setproductType(e.target.value)} required>
              <option value="">--Please choose an option--</option>
              <option value="General">General</option>
              <option value="Fashion">Fashion</option>
              <option value="Tech">Tech</option>
              <option value="Medicine">Medicine</option>
            </select>
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Businessregistration;
