import React from 'react'
import Head from 'next/head'

import { createStore } from 'redux'

import prologueApp from '../reducers'

import CalendarPicker from '../components/calendarpicker'
import DateNav from '../components/datenav'
import Reading from '../components/reading'

let store = createStore(prologueApp)

const Index = () => (
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
    <CalendarPicker />

    <div>
      <DateNav />
      <Reading />
    </div>

  </div>
)

export default Index