import axios from 'axios';

export const GET = 'FETCH_COMMENT';
export const LIST = 'FETCH_COMMENTS';
export const CREATE = 'CREATE_COMMENT';
export const DELETE = 'DELETE_COMMENT';

export const createComment = commentData => dispatch => {
  return api({
    method: 'PUT',
    path: '/comments',
    data: commentData,
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

export const fetchComments = postId => dispatch => {
  return axios.get('/accounts/'+id)
    .then(response => {
      dispatch({
        type: LIST,
        payload: response.data
      });
      return account;
    });
};
