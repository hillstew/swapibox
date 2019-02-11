export const getFilm = (film) => ({
  type: 'GET_FILM',
  film
})

export const getPlanets = (planets) => ({
  type: 'GET_PLANETS',
  planets
})

export const getPeople = (people) => ({
  type: 'GET_PEOPLE',
  people
})

export const getVehicles = (vehicles) => ({
  type: 'GET_VEHICLES',
  vehicles
})

export const setView = (view) => ({
  type: 'SET_VIEW',
  view
})