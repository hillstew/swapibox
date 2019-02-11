export const filmReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_FILM':
      return action.film
    default:
      return state;
  }
} 