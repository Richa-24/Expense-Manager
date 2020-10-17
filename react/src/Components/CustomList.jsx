import React from 'react';
import List from '@material-ui/core/List';
import CustomListItem from './CustomListItem';


const CustomList = ({ data }) => (
  <List style={{maxWidth: 700, margin: '1rem auto'}} >
    {data.map(item => <CustomListItem key={item._id} {...item} />)}
  </List>
)

export default CustomList;