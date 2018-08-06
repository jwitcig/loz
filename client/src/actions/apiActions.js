import axios from 'axios';

export const api = (request, action) => {
  let { method, path, data } = request;
  let { actionName, dispatch } = action;

  var op;
  switch (method) {
    case 'GET':
      op = axios.get(path, data);
      break;
    case 'POST':
      op = axios.post(path, data, { withCredentials: true });
      break;
    case 'PUT':
      op = axios.put(path, data, { withCredentials: true });
      break;
    case 'PATCH':
      op = axios.patch(path, data, { withCredentials: true });
      break;
    case 'DELETE':
      op = axios.delete(path, data, { withCredentials: true });
      break;
    default:
      break;
  }

  return op.then(response => {
    dispatch({
      type: actionName,
      payload: response.data
    });
    return response.data;
  });
};
