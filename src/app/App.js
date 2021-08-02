import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import LabDemo from './demos/LabDemo'
// import DashboardPage from './demos/dashboard/DashboardPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <DashboardPage /> */}
      <LabDemo />
    </ThemeProvider>
  )
}

export default App
