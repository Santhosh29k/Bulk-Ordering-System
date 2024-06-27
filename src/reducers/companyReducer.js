const initialState = {
  companies: [],
  loading: false,
  error: null
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COMPANIES_REQUEST':
      return {...state, loading: true };
    case 'FETCH_COMPANIES_SUCCESS':
      return {...state, companies: action.payload, loading: false };
    case 'FETCH_COMPANIES_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}