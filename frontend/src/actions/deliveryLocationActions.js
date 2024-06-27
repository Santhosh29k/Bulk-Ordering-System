import axios from 'axios';

export const fetchDeliveryLocations = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/delivery_locations/');
      dispatch({
        type: 'FETCH_DELIVERY_LOCATIONS_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_DELIVERY_LOCATIONS_FAILURE',
        payload: error.message
      });
    }
  };
};