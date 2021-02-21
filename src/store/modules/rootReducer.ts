import { combineReducers } from 'redux';

import auth from './auth/reducer';
import loading from './loading/reducer';
import utils from './utils/reducer';

export default combineReducers({
  auth,
  loading,
  utils,
});
