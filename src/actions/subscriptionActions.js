import axios from 'axios';

export const fetchSubscriptions = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/subscriptions/');
      dispatch({
        type: 'FETCH_SUBSCRIPTIONS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_SUBSCRIPTIONS_FAILURE',
        payload: error.message
      });
    }
  };
};