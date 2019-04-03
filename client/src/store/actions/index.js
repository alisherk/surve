import axios from 'axios';
import { FETCH_USER, FETCH_GOOGLE_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchGoogleUser = () => async dispatch => {
  const res = await axios.get('/api/current_user'); 
  dispatch({type: FETCH_GOOGLE_USER, payload: res.data.google });
}
