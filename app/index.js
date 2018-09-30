import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'
import configureStore, { history } from './root/configureStore'
import './app.global.css'
//import { client } from 'electron-redux-connector'

const store = configureStore()

// client.listen('IPC', (event, arg) => {
//   store.dispatch(arg)
// })

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
