import github from '../../api/github';

const SET_USER_LOADING_STATE = 'compasso-interview/users/SET_USER_LOADING_STATE';
const SET_REPO_LOADING_STATE = 'compasso-interview/users/SET_REPO_LOADING_STATE';

const FETCH_USER_SUCCESS = 'compasso-interview/users/FETCH_USER_SUCCESS';
const FETCH_USER_FAIL = 'compasso-interview/users/FETCH_USER_FAIL';

const FETCH_USER_REPOS_SUCCESS = 'compasso-interview/users/FETCH_USER_REPOS_SUCCESS';
const FETCH_USER_REPOS_FAIL = 'compasso-interview/users/FETCH_USER_REPOS_FAIL';

const CLEAR_USER_STATE = 'compasso-interview/users/CLEAR_USER_STATE';

const initialState = {
  user: null,
  repos: [],
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state, user: action.payload, error: null,
      };
    case FETCH_USER_REPOS_SUCCESS:
      return {
        ...state, repos: action.payload, error: null,
      };
    case FETCH_USER_FAIL:
      return { ...state, error: action.payload, user: {} };
    case FETCH_USER_REPOS_FAIL:
      return { ...state, error: action.payload, repos: [] };
    case SET_USER_LOADING_STATE:
      return { ...state, isLoading: action.payload };
    case SET_REPO_LOADING_STATE:
      return { ...state, isRepoLoading: action.payload };
    case CLEAR_USER_STATE:
      return { ...initialState };
    default:
      return state;
  }
}

export const fetchUser = (username) => async (dispatch) => {
  try {
    dispatch({ type: SET_USER_LOADING_STATE, payload: true });
    const { data } = await github.get(`/users/${username}`);
    return dispatch({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (err) {
    return dispatch({ type: FETCH_USER_FAIL, payload: err.message });
  } finally {
    dispatch({ type: SET_USER_LOADING_STATE, payload: false });
  }
};

export const fetchUserRepositories = (username, repo = 'repos') => async (dispatch) => {
  try {
    const validRepos = ['repos', 'starred'];
    if (!validRepos.includes(repo)) throw Error('Invalid repository');

    dispatch({ type: SET_REPO_LOADING_STATE, payload: true });

    const { data } = await github.get(`/users/${username}/${repo}`);
    return dispatch({ type: FETCH_USER_REPOS_SUCCESS, payload: data });
  } catch (err) {
    return dispatch({ type: FETCH_USER_REPOS_FAIL, payload: err.message });
  } finally {
    dispatch({ type: SET_REPO_LOADING_STATE, payload: false });
  }
};

export const clearUserState = () => ({
  type: CLEAR_USER_STATE,
});
