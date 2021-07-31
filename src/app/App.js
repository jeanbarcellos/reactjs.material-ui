import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import DashboardPage from './demos/dashboard/DashboardPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  )
}

export default App
