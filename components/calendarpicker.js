import React, { PropTypes } from 'react'
import moment from 'moment'

const CalendarPicker = ({ calendar, onChange }) => (
  <div>
  <select id="calendar" value={ calendar } onChange={ onChange }>
    <option value="new">New Calendar</option>
    <option value="old">Old Calendar</option>
  </select>
  </div>
)

CalendarPicker.propTypes = {
  calendar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CalendarPicker
