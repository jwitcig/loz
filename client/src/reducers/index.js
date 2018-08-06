import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  locations: locationReducer,
  accounts: accountReducer,
});
