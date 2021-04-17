const FETCH_USER = 'compasso-interview/users/FETCH_USER';
const FETCH_USER_SUCCESS = 'compasso-interview/users/FETCH_SUCCESS';
const FETCH_USER_FAIL = 'compasso-interview/users/FETCH_FAIL';

const initialState = {
  user: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER:
    case FETCH_USER_SUCCESS:
      return { ...state, error: null, user: action.payload };
    case FETCH_USER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
