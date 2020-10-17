import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize:'18px', 

    '& > *': {
      margin: '0.5rem 0'
    },

    '& button, & a': {
      fontSize: '1.1rem'
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
