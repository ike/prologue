import React, { PropTypes } from 'react'

const CalendarPicker = ({ calendar, onChange }) => (
  <div>
  <select value={ calendar } onChange={ onChange }>
    <option value="new">New Calendar</option>
    <option value="old">Old Calendar</option>
  </select>
    <style jsx>{`
      select {
        float: right;
        display: inline-block;
        position: relative;
        bottom: 50px;
      }
    `}</style>
  </div>
)

CalendarPicker.propTypes = {
  calendar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CalendarPicker
