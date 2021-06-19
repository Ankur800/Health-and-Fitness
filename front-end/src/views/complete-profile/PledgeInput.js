import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    leftGrid: {
        textAlign: 'right',
    },
    rightGrid: {
        textAlign: 'left',
        display: 'flex',
    },
    img: {
        marginRight: theme.spacing(10),
        width: '300px',
    },
    rightContent: {
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(10),
        minWidth: 170,
    },
}));

const PledgeInput = ({ setAnswer }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    useEffect(() => {
        //console.log('pledge: ' + value);
        setAnswer(value);
    }, [value]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.leftGrid} item xs={12} sm={6}>
                    <img
                        className={classes.img}
                        src='images/pledge.svg'
                        alt='gender-svg'
                    />
                </Grid>
                <Grid className={classes.rightGrid} item xs={12} sm={6}>
                    <form
                        className={classes.rightContent}
                        noValidate
                        autoComplete='off'
                    >
                        <TextField
                            name='pledge'
                            id='outlined-textarea'
                            label='Your Pledge'
                            placeholder='Write any Motivational Pledge for you'
                            multiline
                            rows={8}
                            variant='outlined'
                            value={value}
                            onChange={handleChange}
                        />
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default PledgeInput;
