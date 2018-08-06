import { GET, LIST, CREATE, DELETE_ALL } from '../actions/locationActions';

const initialState = {
  items: [],
  item: {}
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
    case DELETE_ALL:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
