import axios from 'axios';

export const fetchSubscriptionPlans = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/subscription_plans/');
      dispatch({
        type: 'FETCH_SUBSCRIPTION_PLANS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_SUBSCRIPTION_PLANS_FAILURE',
        payload: error.message
      });
    }
  };
};