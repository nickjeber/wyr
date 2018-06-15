import { _saveQuestionAnswer } from '../_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const answerQuestion = (authedUser, questionId, answer) => {
  return (dispatch) => {
    _saveQuestionAnswer({authedUser, qid:questionId, answer})
    .then(() => {
      dispatch({
        type: ANSWER_QUESTION,
        authedUser,
        questionId, 
        answer
      });
    })
  }
}