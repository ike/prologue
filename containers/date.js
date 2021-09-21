import { connect } from 'react-redux'
import { changeDate } from '../actions'
import DateNav from '../components/DateNav'
import moment from 'moment'

const getDate = (date) => {
  return { date: moment(date).format("MMMM Do YYYY") }
}

const mapStateToProps = (state) => {
  return getDate(state.date.date)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(changeDate(event.target.value))
    }
  }
}

const Date = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateNav)

export default Date