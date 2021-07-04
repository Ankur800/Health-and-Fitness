/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import diets from '../../data/diets';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(40),
        },
        marginBottom: theme.spacing(4),
    },
}));

const FoodInput = ({ setDiet }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={diets.map((diet) => diet.food)}
                onSelect={(e) => setDiet(e.target.value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Search your Food'
                        margin='normal'
                        variant='outlined'
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
};

export default FoodInput;
