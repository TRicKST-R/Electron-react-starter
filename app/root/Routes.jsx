import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../_modules/Home'

const NotFoundPage = () => {
  return (
    <div>
      <h4>Page Not Found</h4>
    </div>
  )
}

export default class Routes extends Component {
  
  render () {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}
