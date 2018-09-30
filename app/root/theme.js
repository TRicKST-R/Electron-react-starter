import { createMuiTheme } from 'material-ui/styles'

export default createMuiTheme({
  // https://material-ui-next.com/customization/themes/#the-other-variables
  // overrides
})

export const rootStyle = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  routesContainer: {
    padding: 16,
    boxSizing: 'border-box'
  }
})
