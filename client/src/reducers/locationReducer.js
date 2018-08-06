import { FETCH_LOCATION, FETCH_LOCATIONS, CREATE_LOCATION, DELETE_ALL_LOCATIONS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_LOCATIONS:
      return {
        ...state,
        items: action.payload
      };
    case CREATE_LOCATION:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_ALL_LOCATIONS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
