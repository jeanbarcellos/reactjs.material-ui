import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  box: {
    marginBottom: theme.spacing(2),
    '& > *': {
      marginBottom: theme.spacing(2)
    }
  }
}))

const LabDemo = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>Labs</h1>
      <h2>Alert</h2>
      <h3>Alerta simples</h3>
      <div className={classes.box}>
        <Alert severity='error'>This is an error alert — check it out!</Alert>
        <Alert severity='warning'>This is a warning alert — check it out!</Alert>
        <Alert severity='info'>This is an info alert — check it out!</Alert>
        <Alert severity='success'>This is a success alert — check it out!</Alert>
      </div>

      <h3>Alerta com descrição</h3>
      <div className={classes.box}>
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='warning'>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='info'>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity='success'>
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </div>

      <h3>Alerta com ações</h3>
      <div className={classes.box}>
        <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        <Alert
          action={
            <Button color='inherit' size='small'>
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </div>

      <h3>Alerta com delineado</h3>
      <div className={classes.box}>
        <Alert variant='outlined' severity='error'>
          This is an error alert — check it out!
        </Alert>
        <Alert variant='outlined' severity='warning'>
          This is a warning alert — check it out!
        </Alert>
        <Alert variant='outlined' severity='info'>
          This is an info alert — check it out!
        </Alert>
        <Alert variant='outlined' severity='success'>
          This is a success alert — check it out!
        </Alert>
      </div>

      <h3>Alerta preenchido</h3>
      <div className={classes.box}>
        <Alert variant='filled' severity='error'>
          This is an error alert — check it out!
        </Alert>
        <Alert variant='filled' severity='warning'>
          This is a warning alert — check it out!
        </Alert>
        <Alert variant='filled' severity='info'>
          This is an info alert — check it out!
        </Alert>
        <Alert variant='filled' severity='success'>
          This is a success alert — check it out!
        </Alert>
      </div>
    </div>
  )
}

export default LabDemo
