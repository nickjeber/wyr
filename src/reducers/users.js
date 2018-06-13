import { GET_USERS } from "../actions/user";

export default (state = [], action) => {
  switch(action.type) {
    case GET_USERS :
      const users = Object.keys(action.users).map(key => 
        action.users[key]
      );
      return users;
      
    default: 
      return state;
  }
}