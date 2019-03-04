import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from '../actions/types';

export default function (state = {}, action) {
  console.log(action.type);
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

    default:
      return state;
  }
}