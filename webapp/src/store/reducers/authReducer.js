import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isFetchingUser: true
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetchingUser: false,
        user: action.payload
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetchingUser: false,
        error: { ...action.payload }
      };

    default:
      return state;
  }
}
