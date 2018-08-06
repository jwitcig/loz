import axios from 'axios';

import { FETCH_LOCATION, FETCH_LOCATIONS, CREATE_LOCATION, DELETE_ALL_LOCATIONS } from './types';

export const fetchLocation = id => dispatch => {
  axios.get('/locations/' + id)
    .then(location => {
      dispatch({
        type: FETCH_LOCATION,
        payload: location
      })
    })
    .catch(alert);
};

export const fetchLocations = () => dispatch => {
  axios.get('/locations')
    .then(response =>
      dispatch({
        type: FETCH_LOCATIONS,
        payload: response.data
      })
    );
};

export const createLocation = locationData => dispatch => {
  return axios.post('/locations', locationData, { withCredentials: true })
    .then(response => {
      dispatch({
        type: CREATE_LOCATION,
        payload: response.data
      })
      return response.data;
    });
};

export const deleteAllLocations = () => dispatch => {
  axios.get('/locations/delete')
    .then(() =>
      dispatch({
        type: DELETE_ALL_LOCATIONS,
        payload: []
      })
    );
};
