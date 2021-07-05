import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { getCurrentProfile } from '../../actions/profile';
import { addCaloriesBurnt } from '../../actions/record';

import ExerciseInput from './ExerciseInput';
import TimeInput from './TimeInput';
import SubmitButton from './SubmitButton';

import exercises from '../../data/exercises';

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

const getAgeCategory = (weight) => {
    if (weight <= 61) {
        return 'I';
    } else if (weight > 61 && weight <= 77) {
        return 'II';
    } else if (weight > 77) {
        return 'III';
    }
};

const CaloriesBurnt = ({
    setAlert,
    getCurrentProfile,
    profile: { profile },
    addCaloriesBurnt,
    history,
}) => {
    const classes = useStyles();

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    // console.log(profile);

    const [exercise, setExercise] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = () => {
        let energy = null;
        // Validate exercise
        exercises.map((item) => {
            if (item.exName === exercise) {
                const cat = getAgeCategory(profile.weight);
                if (cat === 'I') {
                    energy = item.p1;
                } else if (cat === 'II') {
                    energy = item.p2;
                } else if (cat === 'III') {
                    energy = item.p3;
                }
            }
        });
        // Validate time
        if (isNaN(parseInt(time))) {
            setAlert('Invalid Time', 'error');
        }
        // Check for null energy
        if (energy === null) {
            setAlert(
                "Sorry! We don't have information about this exercise, you can enter details manually",
                'warning'
            );
        }
        // Calculate Energy
        energy = (parseFloat(energy) / 30) * parseFloat(time);
        // Action call
        addCaloriesBurnt({ exercise, energy }, history);
    };

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
                    <ExerciseInput setExercise={setExercise} />
                    <TimeInput time={time} setTime={setTime} />
                    <SubmitButton handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </div>
    );
};

CaloriesBurnt.propTypes = {
    addCaloriesBurnt: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, {
    setAlert,
    getCurrentProfile,
    addCaloriesBurnt,
})(withRouter(CaloriesBurnt));
