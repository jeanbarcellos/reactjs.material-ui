import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import ThemeDemo from './demos/ThemeDemo'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeDemo />
    </ThemeProvider>
  )
}

export default App
