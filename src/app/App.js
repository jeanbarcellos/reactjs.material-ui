import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import TransferList from './doc/TransferList'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TransferList />
    </ThemeProvider>
  )
}

export default App
