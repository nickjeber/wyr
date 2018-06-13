import { _getUsers } from '../_DATA';
import { getUsers, selectUser } from './user';

export function loadInitialData() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(getUsers(users));
      //TODO: remove this once I'm done with development
      dispatch(selectUser("sarahedo"))
    });
  }
}