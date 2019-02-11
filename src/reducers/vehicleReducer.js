export const vehicleReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_VEHICLES":
      return action.vehicles
    default:
      return state
  }
}