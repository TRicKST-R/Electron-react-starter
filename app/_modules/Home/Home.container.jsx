import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HomeView from './Home.view'
import { push } from 'react-router-redux'

export default connect(
  state => ({
    homeState: state.homeState
  }),
  dispatch => ({
     push: bindActionCreators(push, dispatch)
   })
)(HomeView)