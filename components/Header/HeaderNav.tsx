import React from 'react';
import Link from 'next/link';

import '../../styles/components/header/header-nav.scss';

type HeaderNavProps = {
  path: string;
  text: string;
  id?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({path, text, id}) => {
  return (
    <nav className="header-nav">
      <Link href={path}>
        <a className={id ? [id, "header-nav__text"].join(" ") : "header-nav__text"}>
          {text}
        </a>
      </Link>
    </nav>
  );
};

export default HeaderNav;