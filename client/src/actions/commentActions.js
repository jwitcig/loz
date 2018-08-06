import axios from 'axios';

import { api } from './apiActions';

export const GET = 'FETCH_COMMENT';
export const LIST = 'FETCH_COMMENTS';
export const CREATE = 'CREATE_COMMENT';
export const DELETE = 'DELETE_COMMENT';

export const createComment = data => dispatch => {
  return api({
    method: 'PUT',
    path: '/comments',
    data: data,
  }, {
    actionName: CREATE,
    dispatch: dispatch,
  });
};

export const fetchComment = id => dispatch => {
  return api({
    method: 'GET',
    path: '/comments/' + id,
    data: null,
  }, {
    actionName: GET,
    dispatch: dispatch,
  });
};

export const fetchComments = (ownerId, ownerType) => dispatch => {
  // return axios.get('/accounts/'+id)
  //   .then(response => {
  //     dispatch({
  //       type: LIST,
  //       payload: response.data
  //     });
  //     return account;
  //   });
  return api({
    method: 'GET',
    path: '/comments',
    data: {
      params: {
        ownerId: ownerId,
        ownerType: ownerType,
      }
    },
  }, {
    actionName: LIST,
    dispatch: dispatch,
  });
};
