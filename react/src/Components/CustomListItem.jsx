import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Box, Card, ListItemSecondaryAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem'
  },
  texts: {
    display: 'flex',
    flexDirection: 'column'
  },
  amount: {
    fontSize: '18px'
  }
}))


const CustomListItem = ({ _id, type, title, amount }) => {
  const classes = useStyles()
  return (
    <ListItem>
      <Box margin={"0.2rem 0"} width='100%'>
        <Card className={classes.root} >
          <ListItemText>
            <Typography variant='h5'>
              {title}
            </Typography>
            <Typography variant='subtitle1'>
              {type === 'C' ? 'Credit' : 'Debit'}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction style={{ marginRight: '10px' }} className={classes.amount}>
            <Typography variant='h6' color={type==='C'? 'primary': 'secondary'}>
              {type === 'C' ? '+$' + amount : '-$' + amount}
            </Typography>
          </ListItemSecondaryAction>
        </Card>
      </Box>
    </ListItem>
  )
}

export default CustomListItem;