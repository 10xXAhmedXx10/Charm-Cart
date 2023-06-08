import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function Registrationorlog() {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userType === 'user') {
      navigate('/userregistration');
    } else if (userType === 'business') {
      navigate('/businessregistration');
    } else {
      alert("Please select a user type before proceeding.");
    }
  }

  const handleLogin = () => {
    navigate('/login');
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
      <div className="main-container">
        <div className="content-wrap">
          <div className="registration-options">
            <h2>You are registering as:</h2>
            <input type="radio" id="user" name="userType" value="user" onChange={() => setUserType('user')} />
            <label htmlFor="user">User</label><br />
            <input type="radio" id="business" name="userType" value="business" onChange={() => setUserType('business')} />
            <label htmlFor="business">Business</label><br />
            <button onClick={handleSubmit}>Register</button>
            <h2>OR</h2>
            <button onClick={handleLogin} style={{ marginTop: '-10px' }}>log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrationorlog;
