import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      margin: '0.5rem 0'
    }
  }
}))

const Form = ({ onSubmit, children }) => {
  const classes = useStyles()

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form;
