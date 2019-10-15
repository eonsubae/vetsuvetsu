import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Router from 'next/router';

import '../styles/components/auth/signup.scss';
import baseUrl from '../utils/baseUrl';
import { validatePassword } from '../utils/auth';

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

const pwMatched = {
  border: 'none',
  borderBottom: '1px solid #333'
};

const pwUnMatched = {
  border: '1px solid red'
};

const Signup = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [confirmPw, setConfirmPw] = useState("");
  const [isMatched, setIsMatched] = useState(true);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  const handleConfirmPwChnage = (event: any) => {
    const { value } = event.target;
    setConfirmPw(value);
  }

  useEffect(() => {
    const isUser = Object.values(user).every(value => Boolean(value));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const isMatchedPw = validatePassword(user.password, confirmPw);
      if (!isMatchedPw) {
        setIsMatched(false);
        return false;
      } 
  
      setIsMatched(true);
      const url = `${baseUrl}/api/signup`;
      const payload = { ...user };
      await axios.post(url, payload);
      Router.push('/login');
    } catch (error) {
      console.log('Error occured : ', error);
    }
  }

  return (
    <div className="signup">
      <Head>
        <title>Vetsu X 2 - Signup</title>
      </Head>
      <div className="signup-form-container">
        <form className="signup__form" onSubmit={handleSubmit}>
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
              style= {isMatched ? pwMatched : pwUnMatched}
            />
          </p>
          <p>
            <input
              className="signup__form--confirm-password"
              name="confirmpw"
              id="confirmpw"
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPw}
              onChange={handleConfirmPwChnage}
              style= {isMatched ? pwMatched : pwUnMatched}
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