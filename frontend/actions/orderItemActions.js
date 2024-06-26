import axios from 'axios';

export const fetchOrderItems = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/order_items/');
      dispatch({
        type: 'FETCH_ORDER_ITEMS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ORDER_ITEMS_FAILURE',
        payload: error.message
      });
    }
  };
};