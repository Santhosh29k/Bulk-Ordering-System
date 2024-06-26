import axios from 'axios';

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/orders/');
      dispatch({
        type: 'FETCH_ORDERS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ORDERS_FAILURE',
        payload: error.message
      });
    }
  };
};