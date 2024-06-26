const initialState = {
  subscriptions: [],
  loading: false,
  error: null
};

export default function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTIONS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_SUBSCRIPTIONS_SUCCESS':
      return {...state, subscriptions: action.payload, loading: false };
    case 'FETCH_SUBSCRIPTIONS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}