import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import * as data from './store'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component='p' variant='h4'>
        {data.deposits.value}
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        on {data.deposits.date}
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}
