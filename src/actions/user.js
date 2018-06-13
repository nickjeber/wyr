export const SELECT_USER = 'SELECT_USER';
export const GET_USERS = 'GET_USERS';

export const selectUser = (id) => {
  return {
    type: SELECT_USER,
    id
  }
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}