import { GET_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";

export default (state = [], action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    default:
      return state;
  }
};
