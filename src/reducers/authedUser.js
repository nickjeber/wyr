import { SELECT_USER } from "../actions/user";

export default (state = null, action) => {
  switch(action.type) {
    case SELECT_USER : 
      return action.id;
    default: 
      return state;
  }
}