import axios from 'axios';

import { api } from './apiActions.js';

export const GET = 'FETCH_LOCATION';
export const LIST = 'FETCH_LOCATIONS';
export const CREATE = 'CREATE_LOCATION';
export const DELETE_ALL = 'DELETE_ALL_LOCATIONS';

export const fetchLocation = id => dispatch => {
  return api({
    method: 'GET',
    path: '/locations/' + id,
    data: null,
  }, {
    actionName: GET,
    dispatch: dispatch
  });
};

export const fetchLocations = () => dispatch => {
  return api({
    method: 'GET',
    path: '/locations',
    data: null,
  }, {
    actionName: LIST,
    dispatch: dispatch,
  });
};

export const createLocation = locationData => dispatch => {
  return api({
    method: 'PUT',
    path: '/locations',
    data: locationData,
  }, {
    actionName: CREATE,
    dispatch: dispatch,
  });
};

export const deleteAllLocations = () => dispatch => {
  return api({
    method: 'DELETE',
    path: '/locations/delete',
    data: null,
  }, {
    actionName: DELETE_ALL,
    dispatch: dispatch,
  });
};
