import { useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import '../styles/components/auth/logout.scss';

const Logout = () => {
  
  useEffect(() => {
    const token = cookie.get('token');
    if (token) {
      cookie.remove('token');
      Router.push('/');
    } else {
      Router.push('/login');
    }
  }, []);

  return (
    <div className="logout-message">
      Please. Waiting for a second. Logout in progress
    </div>
  );
};

export default Logout;