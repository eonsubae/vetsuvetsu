import React from 'react';
import Link from 'next/link';

import '../../styles/components/header/header-nav.scss';

type HeaderNavProps = {
  path: string;
  text: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({path, text}) => {
  return (
    <nav className="header-nav">
      <Link href={path}>
        <a className="header-nav__text">
          {text}
        </a>
      </Link>
    </nav>
  );
};

export default HeaderNav;