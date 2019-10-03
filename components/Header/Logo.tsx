import Link from 'next/link';

import '../../styles/components/header/logo.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <a>
          <img className="main-header__logo" src="/static/logo.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;