import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        TEST
      </div>
    )
  }
}

export default withStyles(styles)(Home)