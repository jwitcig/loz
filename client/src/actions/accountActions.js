import axios from 'axios';

import { CREATE_ACCOUNT, FETCH_ACCOUNT, LOGIN, LOGOUT } from './types';

export const createAccount = accountData => dispatch => {
  return axios.post('/accounts', accountData)
    .then(accountId => {
      dispatch({
        type: CREATE_ACCOUNT,
        payload: accountId
      });
      return accountId;
    });
};

export const fetchAccount = id => dispatch => {
  return axios.get('/accounts/'+id)
    .then(account => {
      dispatch({
        type: FETCH_ACCOUNT,
        payload: account
      });
      return account;
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
    });
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
