import cookie from 'js-cookie';

const CHECKAUTH = 'auth/CHECKAUTH' as const;

export const checkAuth = () => ({ type: CHECKAUTH });

type AuthAction = 
  | ReturnType<typeof checkAuth>;

type AuthState = {
  isAuthenticated: boolean
};

const setInitialState = () => {
  const token = cookie.get('token');
  if (token) return true;
  return false;
}

const initialState: AuthState = {
  isAuthenticated: setInitialState()
};

function editor(state: AuthState = initialState, action: AuthAction) {
  switch(action.type) {
    case 'auth/CHECKAUTH':
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