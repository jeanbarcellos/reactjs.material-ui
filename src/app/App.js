import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import theme from './config/theme'
import ptBR from 'date-fns/locale/pt-BR'
import DashboardPage from './demos/dashboard/DashboardPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <DashboardPage />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
