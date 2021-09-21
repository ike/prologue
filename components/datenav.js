import React, { PropTypes } from 'react'

import Reading from '../components/reading'

const DateNav = ({ date, onChange }) => (
  <div className="root">
    <p id="date">{ date }</p>
    <div id="back">&larr;</div>
    <div id="forward">&rarr;</div>
    <Reading />
    <style jsx>{`
      .root {
        font-family: "Courier New", mono;
        text-align: center;
      }
      #back, #forward {
        font-size: 2em;
        font-style: bolder;
        display: inline-block;
        padding: 0px 110px 0px 110px;
        position: relative;
        bottom: 24px;
        cursor: pointer;
      }
      #date {
        position: relative;
        top: 24px;
      }
      `}</style>
  </div>
)

DateNav.propTypes = {
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default DateNav