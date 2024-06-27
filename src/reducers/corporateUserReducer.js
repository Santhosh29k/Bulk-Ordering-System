const initialState = {
  corporateUsers: [],
  loading: false,
  error: null
};

export default function corporateUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH CORPORATE_USERS_REQUEST':
      return {...state, loading: true };
    case 'FETCH CORPORATE_USERS_SUCCESS':
      return {...state, corporateUsers: action.payload, loading: false };
    case 'FETCH CORPORATE_USERS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}