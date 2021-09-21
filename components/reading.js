import React from 'react'

const Reading = ({ url }) => (
  <div>
    <iframe src={ url } scrolling="no"></iframe>
    <style jsx>{`
      iframe {
        height: 5000px;
        width:100%;
        border: none;
      }
      `}</style>
  </div>
)

export default Reading