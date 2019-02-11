import { combineReducers } from 'redux'
import { filmReducer } from './filmReducer'
import { planetReducer } from './planetReducer'
import { viewReducer } from './viewReducer'
import { peopleReducer } from './peopleReducer'
import { vehicleReducer } from './vehicleReducer'

const rootReducer = combineReducers({
  film: filmReducer,
  planets: planetReducer,
  people: peopleReducer,
  vehicles: vehicleReducer,
  view: viewReducer
})

export default rootReducer;