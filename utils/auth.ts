import cookie from 'js-cookie';
import Router from 'next/router';

export function handleLogin(token) {
  console.log(token);
  cookie.set('token', token);
  Router.push('/account');
};

export function validatePassword(pw, confirmPw) {
  if (pw === confirmPw) {
    return true;
  }

  console.log('Error : password and confirm password is not matched');
  return false;
}