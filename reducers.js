import { combineReducers } from 'redux'
import { Calendars, CHANGE_CALENDAR } from './actions'

const initialState = {
  calendar: Calendars.OLD,
  date: new Date()
}

function calendar(state = initialState, action) {
  switch(action.type) {
    case CHANGE_CALENDAR:
      return Object.assign({}, state, {
        calendar: action.calendar.toString()
      })
    default:
      return state
  }
}

function date(state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}

const prologueApp = combineReducers({
  calendar,
  date
})

export default prologueApp