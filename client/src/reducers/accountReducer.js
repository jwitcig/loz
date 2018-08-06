import { CREATE_ACCOUNT, FETCH_ACCOUNT, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  items: [],
  item: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_ACCOUNT:
      return {
        ...state,
        item: action.payload
      };
    case LOGIN:
      return {
        ...state,
        currentUserId: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        currentUserId: null
      };
    default:
      return state;
  }
}
