import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import cookie from 'js-cookie';

import { RootState } from '../contexts/index';
import { checkAuth } from '../contexts/auth';
import '../styles/components/auth/logout.scss';

const Logout = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isAuth) {
      cookie.remove('token');
      dispatch(checkAuth());
      Router.push('/');
    } else {
      Router.push('/login');
    }
  }, []);

  return (
    <div className="logout-message">
      Please. Waiting for a second. Logout in progress...
    </div>
  );
};

export default Logout;