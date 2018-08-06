import { GET, LIST, CREATE, DELETE } from '../actions/commentActions';

const initialState = {
  items: [],
  item: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET:
      return {
        ...state,
        item: action.payload
      };
    case LIST:
      return {
        ...state,
        items: action.payload
      };
    case CREATE:
      return {
        ...state,
        item: action.payload
      };
    case DELETE:
      return {
        ...state,
        currentUserId: null
      };
    default:
      return state;
  }
}
