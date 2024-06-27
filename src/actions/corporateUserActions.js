import axios from 'axios';

export const fetchCorporateUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/corporate_users/');
      dispatch({
        type: 'FETCH CORPORATE_USERS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH CORPORATE_USERS_FAILURE',
        payload: error.message
      });
    }
  };
};