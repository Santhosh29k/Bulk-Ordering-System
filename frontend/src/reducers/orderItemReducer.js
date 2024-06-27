const initialState = {
  orderItems: [],
  loading: false,
  error: null
};

export default function orderItemReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ORDER_ITEMS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_ORDER_ITEMS_SUCCESS':
      return {...state, orderItems: action.payload, loading: false };
    case 'FETCH_ORDER_ITEMS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}