const initialState = {
  orders: [],
  loading: false,
  error: null
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ORDERS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_ORDERS_SUCCESS':
      return {...state, orders: action.payload, loading: false };
    case 'FETCH_ORDERS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}