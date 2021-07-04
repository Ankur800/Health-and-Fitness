import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExerciseInput from './ExerciseInput';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: theme.spacing(80),
    },
    foodImage: {
        width: theme.spacing(80),
    },
    gridRight: {
        minHeight: theme.spacing(80),
    },
    text: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(4),
    },
}));

const CaloriesBurnt = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.gridLeft} item xs={12} sm={6}>
                    <img
                        className={classes.foodImage}
                        src='images/exercise.svg'
                        alt='left-img'
                    />
                </Grid>
                <Grid className={classes.gridRight} item xs={12} sm={6}>
                    <Typography
                        className={classes.text}
                        variant='h3'
                        component='h3'
                        gutterBottom
                    >
                        Add your calories burnt today
                    </Typography>
                    <ExerciseInput />
                </Grid>
            </Grid>
        </div>
    );
};

export default CaloriesBurnt;
