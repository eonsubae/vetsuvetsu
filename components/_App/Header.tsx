import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../contexts/index';
import '../../styles/components/header/header.scss';
import Logo from '../Header/Logo';
import HeaderNav from '../Header/HeaderNav';

const Header: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <header className="main-header">
      <Logo />
      <div className="navs-container">
        <HeaderNav 
          path="/wordbook" 
          text="Wordbook" 
        />
        <HeaderNav 
          id="editor-nav"
          path="/editor" 
          text="Editor" 
        />
        {auth ?
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