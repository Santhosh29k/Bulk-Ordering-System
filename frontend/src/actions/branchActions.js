import axios from 'axios';

export const fetchBranches = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/branches/');
      dispatch({
        type: 'FETCH_BRANCHES_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_BRANCHES_FAILURE',
        payload: error.message
      });
    }
  };
};