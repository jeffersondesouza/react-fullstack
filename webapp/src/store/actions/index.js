import HttpService from '../../services/HttpService';
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST } from './types';


export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    const res = await HttpService.get('/api/current_user');
  
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: 'error' });
  }
}