import React, { useState, useEffect } from 'react';

import '../styles/components/auth/signup.scss';

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

const Signup = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="signup">
      <div className="signup-form-container">
        <form className="signup__form">
          <legend className="signup__form--title">Account Information</legend>
          <p>
            <input
              className="signup__form--email" 
              id="email"
              name="email"
              type="email" 
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </p>
          <p>
            <input
              className="signup__form--name" 
              id="name"
              name="name"
              type="text" 
              value={user.name}
              onChange={handleChange} 
              placeholder="Name"
              required
            />
          </p>
          <p>
            <input
              className="signup__form--password" 
              id="password"
              name="password"
              type="password" 
              value={user.password}
              onChange={handleChange} 
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input
              className="signup__form--re-password" 
              id="re-password"
              type="password"
              placeholder="Re-Password"
              required
            />
          </p>
          <button 
            className="signup__form--submit-btn"
            type="submit"
            disabled={disabled}  
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;