const initialState = {
  individualUsers: [],
  loading: false,
  error: null
};

export default function individualUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH INDIVIDUAL_USERS_REQUEST':
      return {...state, loading: true };
    case 'FETCH INDIVIDUAL_USERS_SUCCESS':
      return {...state, individualUsers: action.payload, loading: false };
    case 'FETCH INDIVIDUAL_USERS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}