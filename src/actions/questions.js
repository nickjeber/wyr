import { _saveQuestionAnswer, _saveQuestion } from "../_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import { loadQuestions } from "./shared";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  };
};

export const answerQuestion = (authedUser, questionId, answer) => {
  return dispatch => {
    _saveQuestionAnswer({ authedUser, qid: questionId, answer }).then(() => {
      dispatch({
        type: ANSWER_QUESTION,
        authedUser,
        questionId,
        answer
      });
    });
  };
};

export const addQuestion = (optionOneText, optionTwoText, author) => {
  return dispatch => {
    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, author }).then(() => {
      dispatch(loadQuestions());
      dispatch(hideLoading());
    });
  };
};
