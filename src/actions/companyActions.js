import axios from 'axios';

export const fetchCompanies = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:8000/api/companies/');
      dispatch({
        type: 'FETCH_COMPANIES_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_COMPANIES_FAILURE',
        payload: error.message
      });
    }
  };
};