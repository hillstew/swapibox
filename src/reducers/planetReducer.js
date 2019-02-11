export const planetReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PLANETS':
     return action.planets
    default:
      return state;
  }
 }