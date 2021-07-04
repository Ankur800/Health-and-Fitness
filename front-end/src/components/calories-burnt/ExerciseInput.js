/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import exercises from '../../data/exercises';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(40),
        },
        marginBottom: theme.spacing(4),
    },
}));

const ExerciseInput = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Autocomplete
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={exercises.map((exercise) => exercise.exName)}
                // onSelect={(e) => setDiet(e.target.value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='Search your Activity'
                        margin='normal'
                        variant='outlined'
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
};

export default ExerciseInput;
