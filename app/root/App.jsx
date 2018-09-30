import React from 'react'
import Routes from './Routes'
import { withStyles } from 'material-ui/styles'
import { rootStyle as styles } from './theme'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </div>
    )
  }
}

export default withStyles(styles)(App)
