import axios from 'axios';

export const fetchIndividualUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/individual_users/');
      dispatch({
        type: 'FETCH INDIVIDUAL_USERS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH INDIVIDUAL_USERS_FAILURE',
        payload: error.message
      });
    }
  };
};