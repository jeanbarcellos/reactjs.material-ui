import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MaterialUIPickers from './doc/MaterialUIPickers'
import DateFnsUtils from '@date-io/date-fns'
import theme from './config/theme'
import ptBR from 'date-fns/locale/pt-BR'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <MaterialUIPickers />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
