import React from 'react';
import Link from 'next/link';

import '../../styles/components/header/logo.scss'

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <a>
          <img className="main-header__logo" src="/static/header/logo.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;