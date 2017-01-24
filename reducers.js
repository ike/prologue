import { combineReducers } from 'redux'
import { Calendars, CHANGE_CALENDAR } from './actions'

const initialState = {
  calendar: Calendars.OLD
}

function calendar(state = initialState, action) {
  switch(action.type) {
    case CHANGE_CALENDAR:
      return Object.assign({}, state, {
        calendar: action.calendar
      })
    default:
      return state
  }
}

const prologueApp = combineReducers({
  calendar
})

export default prologueApp