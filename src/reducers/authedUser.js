import { SELECT_USER } from "../actions/user";

export default (state = {}, action) => {
  switch(action.type) {
    case SELECT_USER : 
      return {
        ...state,
        authUser: action.id
      }
    default: 
      return state;
  }
}