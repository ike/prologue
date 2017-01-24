import React from 'react'
import Head from 'next/head'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import prologueApp from '../reducers'
import App from '../components/app'

let store = createStore(prologueApp)

export default () => (
  <Provider store={ store } >

    <App />

  </Provider>
)