import React from 'react'
import Head from 'next/head'

import Calendar from '../containers/calendar'
import Date from '../containers/date'

const App = () => (
  <div>
    <Head>
      <title>Prologue of Ohrid</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      <meta name="apple-mobile-web-app-title" content="Prologue" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Head>

    <h1>Prologue from Ohrid</h1>
    <Calendar />
    <div id="clear"></div>
    <Date />
    <style jsx>{`
          body {
            max-width: 600px;
            margin: 0 auto;
          }
          h1 {
            font-size: 2.3em;
          }
          #clear {
            clear: both;
          }
        `}</style>
  </div>
)

export default App