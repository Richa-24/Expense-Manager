import { Box, Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomList from '../Components/CustomList';
import api from '../utils/api';
import Pagination from '@material-ui/lab/Pagination';


export default function DisabledTabs() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    setLoading(transactions)
    api.get('/transactions', {
      headers: {
        user_id: localStorage.getItem('auth')
      },
      params: {
        page, filter
      }
    }).then(({ data }) => {
      setLoading(false)
      setTotalPages(data.totalPages)
      setTransactions(data.results)
    })
      .catch(err => console.log(err.message))
  }, [page, filter])


  return (
    <Box margin='1rem 0'>
      <Box>
        <Button variant='outlined' onClick={() => setFilter('')} color={filter === '' ? 'secondary' : ""} >All</Button>
        <Button variant='outlined' onClick={() => setFilter('C')} color={filter === 'C' ? 'secondary' : ""} >Credits</Button>
        <Button variant='outlined' onClick={() => setFilter('D')} color={filter === 'D' ? 'secondary' : ""} >Debits</Button>
      </Box>

      {loading ? <Box margin='2rem 0'> <CircularProgress /> </Box> : <>
        <CustomList data={transactions} />
        <Box display='flex' justifyContent='center' marginBottom='1rem'>
          <Pagination count={totalPages} onChange={(e, value) => setPage(Number(value))} page={page} color="primary" />
        </Box>
      </>}


    </Box>
  );
}
