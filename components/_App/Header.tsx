import React from 'react';

import '../../styles/components/header/header.scss';
import Logo from '../Header/Logo';
import HeaderNav from '../Header/HeaderNav';

const Header: React.FC = () => {
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
      </div>
    </header>
  );
};

export default Header;