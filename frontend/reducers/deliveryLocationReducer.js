const initialState = {
  deliveryLocations: [],
  loading: false,
  error: null
};

export default function deliveryLocationReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DELIVERY_LOCATIONS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_DELIVERY_LOCATIONS_SUCCESS':
      return {...state, deliveryLocations: action.payload, loading: false };
    case 'FETCH_DELIVERY_LOCATIONS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}