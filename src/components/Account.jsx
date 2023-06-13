import React from 'react';


function Account({ name }) {
  return (
    <div className="account-container">
      <div>
        <h1 className="dashboard">Dashboard</h1>
      </div>
      <div>
        <h1 className="account-greeting">Welcome back</h1>
      </div>
      <div className="animated-name">
        {name}
      </div>
     
     
      <div class="CharmCart-logo-container">
  <img src="/assets/images/CharmCartlogo.png" class="CharmCart-logo" alt="CharmCart Logo" />
</div>


    </div>
  );
}

export default Account;
