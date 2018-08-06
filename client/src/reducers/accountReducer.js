import { CREATE, GET, LOGIN, LOGOUT } from '../actions/accountActions';

const initialState = {
  items: [],
  item: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        item: action.payload
      };
    case GET:
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
