import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import accountReducer from './accountReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  locations: locationReducer,
  accounts: accountReducer,
  comments: commentReducer,
});
