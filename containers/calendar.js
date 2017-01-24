import { connect } from 'react-redux'
import { changeCalendar } from '../actions'
import CalendarPicker from '../components/CalendarPicker'

const getCalendar = (calendar) => {
  return calendar
}

const mapStateToProps = (state) => {
  return getCalendar(state.calendar)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(changeCalendar(event.target.value))
    }
  }
}

const Calendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPicker)

export default Calendar