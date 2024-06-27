const initialState = {
  mentors: [],
  loading: false,
  error: null
};

export default function mentorReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENTORS_REQUEST':
      return {...state, loading: true };
    case 'FETCH_MENTORS_SUCCESS':
      return {...state, mentors: action.payload, loading: false };
    case 'FETCH_MENTORS_FAILURE':
      return {...state, error: action.payload, loading: false };
    default:
      return state;
  }
}