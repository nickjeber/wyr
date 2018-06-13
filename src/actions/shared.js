import { _getUsers } from '../_DATA';
import { getUsers } from './user';

export function loadInitialData() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(getUsers(users));
    });
  }
}