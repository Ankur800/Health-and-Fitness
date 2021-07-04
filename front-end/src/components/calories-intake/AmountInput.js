import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(40),
        },
        marginBottom: theme.spacing(4),
    },
}));

const AmountInput = ({ amount, setAmount }) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                id='outlined-basic'
                label='Enter Amount in grams'
                variant='outlined'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </form>
    );
};

export default AmountInput;
