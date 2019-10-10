import { useState, useEffect } from 'react';
import cookie from 'js-cookie';

import '../styles/components/auth/login.scss';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { handleLogin } from '../utils/auth';
import { useRouter } from 'next/router';

const USER = {
  email: "",
  password: ""
};

const Login = () => {
  const [user, setUser] = useState(USER);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = cookie.get('token');
    if (token) {
      router.push('/account');
    }
  }, []);

  useEffect(() => {
    const isUser = Object.values(user).every(value => Boolean(value));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  return (
    <div className="login">
      <div className="login-form-container">
        <form className="login__form" onSubmit={handleSubmit}>
          <legend className="login__form--title">Account Information</legend>
          <p>
            <input
              className="login__form--email" 
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
              className="login__form--password" 
              id="password"
              name="password"
              type="password" 
              value={user.password}
              onChange={handleChange} 
              placeholder="Password"
              required
            />
          </p>
          <button 
            className="login__form--submit-btn"
            type="submit"
            disabled={disabled}  
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;