import { GET_USERS } from "../actions/user";
import { ANSWER_QUESTION } from "../actions/questions";

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.answer
          }
        }
      };
    default:
      return state;
  }
};
