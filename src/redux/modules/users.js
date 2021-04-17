import github from '../../api/github';

const FETCH_USER = 'compasso-interview/users/FETCH_USER';
const FETCH_USER_SUCCESS = 'compasso-interview/users/FETCH_USER_SUCCESS';
const FETCH_USER_FAIL = 'compasso-interview/users/FETCH_USER_FAIL';
const SET_LOADING_STATE = 'compasso-interview/users/SET_LOADING_STATE';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
      return {
        ...state, error: null, user: action.payload,
      };
    case FETCH_USER_FAIL:
      return { ...state, error: action.payload, user: {} };
    case SET_LOADING_STATE:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export const fetchUser = (userName) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER });
    const { data } = await github.get(`/users/${userName}`);
    return dispatch({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (err) {
    return dispatch({ type: FETCH_USER_FAIL, payload: err.message });
  } finally {
    dispatch({ type: SET_LOADING_STATE, payload: false });
  }
};
