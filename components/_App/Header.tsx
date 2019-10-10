import React, { Fragment, useState, useEffect } from 'react';
import cookie from 'js-cookie';

import '../../styles/components/header/header.scss';
import Logo from '../Header/Logo';
import HeaderNav from '../Header/HeaderNav';

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = cookie.get('token');
    if (token) setIsAuth(true);
    else setIsAuth(false);
  }, []);

  return (
    <header className="main-header">
      <Logo />
      <div className="navs-container">
        <HeaderNav 
          path="/wordbook" 
          text="Wordbook" 
        />
        <HeaderNav 
          path="/editor" 
          text="Editor" 
        />
        {isAuth ?
          (
            <Fragment>
              <HeaderNav 
                path="/account"
                text="Account"
              />
              <HeaderNav 
                path="/logout" 
                text="Logout"
              />
            </Fragment>
          ) :
          (
            <Fragment>
              <HeaderNav 
                path="/signup" 
                text="Signup" 
              />
              <HeaderNav 
                path="/login" 
                text="Login" 
              />
            </Fragment>
          )
        }
      </div>
    </header>
  );
};

export default Header;