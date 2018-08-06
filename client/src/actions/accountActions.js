import axios from 'axios';

import { api } from './apiActions.js';

export const CREATE = 'CREATE_ACCOUNT';
export const GET = 'FETCH_ACCOUNT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const createAccount = accountData => dispatch => {
  return api({
    method: 'PUT',
    path: '/accounts',
    data: accountData,
  }, {
    actionName: CREATE,
    dispatch: dispatch,
  });
};

export const fetchAccount = id => dispatch => {
  return api({
    method: 'GET',
    path: '/accounts/' + id,
    data: null,
  }, {
    actionName: GET,
    dispatch: dispatch,
  });
};

export const login = (username, password) => dispatch => {
  return axios.post('/accounts/login', { username: username, password: password })
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      return response.data;
    }).catch(console.log);
};

export const logout = (username, password) => dispatch => {
  return axios.post('/accounts/logout')
    .then(response => {
      dispatch({
        type: LOGOUT,
        payload: true,
      });
    });
};
