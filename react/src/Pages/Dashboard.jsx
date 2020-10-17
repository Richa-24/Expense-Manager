import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Typography, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import { postUserTransactions } from '../Redux/app/actions'
import { fetchUserTransactions } from '../Redux/app/actions'
import * as timeAgo from 'timeago.js';
import api from '../utils/api';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 56),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

const useStyles = makeStyles({
    topRow: {
        display: 'flex',
        margin: "auto",
        paddingLeft: 100

    },

    newTrans: {
        margin: "auto",
        paddingLeft: 150
    },

    transInput: {
        margin: 10
    },

    total: {
        display: 'flex',
    },

    title: {
        padding: 20
    },

    table: {
        minWidth: 700,
        maxWidth: 1200,
        margin: "auto",
        marginTop: 70
    },


});

export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [income, setIncome] = useState(0)
    const [balance, setBalance] = useState(0)
    const [expense, setExpense] = useState(0)

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("")


    let user_id = useSelector((state) => state.auth.user_id)
    let transactions_data = useSelector((state) => state.app.transactions_data) || []

    useEffect(() => {
        let user_id = localStorage.getItem("auth")
        dispatch(fetchUserTransactions(user_id))
    }, [])


    const getSummary = () => {
        api.get('/transactions/summary',
            {
                headers: {
                    user_id: localStorage.getItem("auth")
                }
            }).then(({ data }) => {
                setIncome(data.totalAmount)
                setBalance(data.balance)
                setExpense(data.expense)
            })
    }
    useEffect(() => {
        getSummary()
    }, [transactions_data])

    const handleAdd = () => {
        let item = {
            title: title,
            amount: amount,
            type: type,
            user_id: user_id
        }
        dispatch(postUserTransactions(item))
        console.log(item)
    }
    return (
        <>  
        <Typography style={{marginTop: '10px'}} variant='h4' component='h4'>
            Dashboard
        </Typography>
            <Box className={classes.topRow}>
                <Box className={classes.total}>
                    <Typography variant="h5" className={classes.title}>
                        <Box>Total Income</Box>
                        <Box>{income}</Box>
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        <Box>Total Expense</Box>
                        <Box>{expense}</Box>
                    </Typography>
                    <Typography variant="h5" className={classes.title}>
                        <Box>Balance</Box>
                        <Box>{balance}</Box>
                    </Typography>
                </Box>

                <Box className={classes.newTrans}>
                    <Typography variant="h5" > Enter New Transaction</Typography>

                    <TextField id="standard-basic" label="Title" className={classes.transInput} value={title} onChange={(e) => setTitle(e.target.value)} />
                    <TextField id="standard-basic" label="Amount" className={classes.transInput} value={amount} onChange={(e) => setAmount(e.target.value)} />

                    <Box><FormControl component="fieldset">

                        <RadioGroup row aria-label="position" name="position" value={type} onChange={(e) => setType(e.target.value)}>
                            <FormControlLabel value="C" control={<Radio color="primary" />} label="Credit" />
                            <FormControlLabel value="D" control={<Radio color="primary" />} label="Debit" />
                        </RadioGroup>
                    </FormControl></Box>

                    <Box><Button variant="contained" color="primary" onClick={handleAdd}>Add</Button></Box>

                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Amount</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions_data.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.title}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.type === "C" ? "Credit" : "Debit"}</StyledTableCell>
                                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                <StyledTableCell align="right">{timeAgo.format(row.timestamp)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
