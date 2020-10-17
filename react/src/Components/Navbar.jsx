import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a, & button': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory()
  const { isAuth } = useSelector(state => state.auth)

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component={Link} to='/' className={classes.title} >
            Expense Manager
          </Typography>

          {!isAuth ? <>
            <Button >
              <Link to='/login' >Login</Link>
            </Button>
            <Button >
              <Link to='/signup' >Sign up</Link>
            </Button>

          </> : <>
            <Button onClick={()=> history.push('/dashboard')} >
              Dashboard
            </Button>
            <Button onClick={()=> history.push('/ledger')} >
              Ledger
            </Button>
          </>}


        </Toolbar>
      </AppBar>
    </div>
  );
}
