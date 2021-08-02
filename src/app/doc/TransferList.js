import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const data = [
  { id: 1, name: 'Florianópolis' },
  { id: 2, name: 'São José' },
  { id: 3, name: 'Biguaçú' },
  { id: 4, name: 'Palhoça' },
  { id: 5, name: 'Santo Amaro da Inpetratriz' },
  { id: 6, name: 'Paulo Lopes' },
  { id: 7, name: 'Rancho Quiemado' },
  { id: 8, name: 'Tubarão' }
]

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto'
  },
  button: {
    margin: theme.spacing(0.5, 0)
  }
}))

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1)
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1)
}

export default function TransferList() {
  const classes = useStyles()
  const [checked, setChecked] = useState([])
  const [left, setLeft] = useState([1, 2, 3, 4])
  const [right, setRight] = useState([5, 6, 7, 8])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleAllRight = () => {
    setRight(right.concat(left))
    setLeft([])
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
  }

  const handleAllLeft = () => {
    setLeft(left.concat(right))
    setRight([])
  }

  const getCityName = id => {
    return data.find(obj => id === obj.id)
  }

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component='div' role='list'>
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`

          return (
            <ListItem key={value} role='listitem' button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={getCityName(value).name} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )

  const onSubmit = () => {
    console.log('Selected', right)
  }

  return (
    <>
      <Grid container spacing={2} justifyContent='center' alignItems='center' className={classes.root}>
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction='column' alignItems='center'>
            <Button
              variant='outlined'
              size='small'
              className={classes.button}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label='move all right'
            >
              ≫
            </Button>
            <Button
              variant='outlined'
              size='small'
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label='move selected right'
            >
              &gt;
            </Button>
            <Button
              variant='outlined'
              size='small'
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label='move selected left'
            >
              &lt;
            </Button>
            <Button
              variant='outlined'
              size='small'
              className={classes.button}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label='move all left'
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>

      <Button variant='contained' color='primary' onClick={onSubmit}>
        Submit
      </Button>
    </>
  )
}
