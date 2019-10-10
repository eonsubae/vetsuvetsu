import { combineReducers } from 'redux';

import auth from './auth';
import editor from './editor';

const rootReducer = combineReducers({
  editor,
  auth
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;