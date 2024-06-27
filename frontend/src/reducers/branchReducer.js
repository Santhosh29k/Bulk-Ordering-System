const initialState = {
  branches: [],
  loading: false,
  error: null
};

export default function branchReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BRANCHES_REQUEST':
      return {...state, loading: true };
    case 'FETCH_BRANCHES_SUCCESS':
      return {...state, branches: action.payload, loading: false };
    case 'FETCH_BRANCHES_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}