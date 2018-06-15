import { _getUsers, _getQuestions } from '../_DATA';
import { getUsers, selectUser } from './user';
import { getQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function loadInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return _getUsers().then((users) => {
      dispatch(getUsers(users));
      //TODO: remove this once I'm done with development
      dispatch(selectUser("sarahedo"))
      //********/
      dispatch(hideLoading());
    });
  }
}

export function loadQuestions() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions().then((questions) => {
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  }
}