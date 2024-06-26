import axios from 'axios';

export const fetchMentors = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/mentors/');
      dispatch({
        type: 'FETCH_MENTORS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_MENTORS_FAILURE',
        payload: error.message
      });
    }
  };
};