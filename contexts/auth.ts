import cookie from 'js-cookie';

const ISAUTHENTICATED = 'auth/ISAUTHENTICATED' as const;

export const isAuthenticated = () => ({ type: ISAUTHENTICATED });

type AuthAction = 
  | ReturnType<typeof isAuthenticated>;

type AuthState = {
  isAuthenticated: boolean
};

const initialState: AuthState = {
  isAuthenticated: false
};

function editor(state: AuthState = initialState, action: AuthAction) {
  switch(action.type) {
    case 'auth/ISAUTHENTICATED':
      const token = cookie.get('token');
      if (token) {
        return { isAuthenticated : true };
      }
      return { isAuthenticated : false };
    default:
      return state;
  }
};

export default editor;