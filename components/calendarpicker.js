import React, { PropTypes } from 'react'
import moment from 'moment'

const CalendarPicker = ({ calendar, onChange }) => (
  <select id="calendar" value={ calendar } onchange={ onChange }>
    <option value="new">New Calendar</option>
    <option value="old">Old Calendar</option>
  </select>
)

CalendarPicker.propTypes = {
  calendar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CalendarPicker
