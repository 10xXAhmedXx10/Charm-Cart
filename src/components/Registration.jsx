import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(userType === 'user') {
      navigate('/Userregister');
    } else if(userType === 'business') {
      navigate('/businessRegistration');
    } else {
      alert("Please select a user type before proceeding.");
    }
  }

  return (
    <div>
      <div className="video-background">
        <ReactPlayer
          url="/assets/videos/background.mp4"
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          width="100%"
          height="100%"
        />
      </div>

      <div className="registration-options">
        <h2>You are registering as:</h2>
        <input type="radio" id="user" name="userType" value="user" onChange={() => setUserType('user')} />
        <label htmlFor="user">User</label><br/>
        <input type="radio" id="business" name="userType" value="business" onChange={() => setUserType('business')} />
        <label htmlFor="business">Business</label><br/>
        <button onClick={handleSubmit}>Take me</button>
      </div>
    </div>
  );
}

export default Registration;
