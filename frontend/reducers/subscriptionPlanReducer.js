const initialState = {
  subscriptionPlans: [],
  loading: false,
  error: null
};

export default function subscriptionPlanReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION_PLANS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_SUBSCRIPTION_PLANS_SUCCESS':
      return {...state, subscriptionPlans: action.payload, loading: false };
    case 'FETCH_SUBSCRIPTION_PLANS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}