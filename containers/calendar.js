import { connect } from 'react-redux'
import { changeCalendar } from '../actions'
import CalendarPicker from '../components/CalendarPicker'

const getCalendar = (calendar) => {
  return calendar
}

const mapStateToProps = (state) => {
  return {
    calendar: getCalendar(state.calendar)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(changeCalendar(value))
    }
  }
}

const Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPicker)

export default Calendar