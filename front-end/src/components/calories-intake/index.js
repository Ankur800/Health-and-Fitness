import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { addCaloriesIntaken } from '../../actions/record';

import FoodInput from './FoodInput';
import AmountInput from './AmountInput';
import SubmitButton from './SubmitButton';

import diets from '../../data/diets';

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

const CaloriesIntake = ({ setAlert, addCaloriesIntaken, history }) => {
    const classes = useStyles();

    const [diet, setDiet] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        let energy = null;
        // check diet and find energy if exists
        diets.map((item) => {
            if (item.food === diet) {
                energy = item.energy;
            }
        });
        // check amount
        if (isNaN(parseFloat(amount))) {
            setAlert('Invalid Amount', 'error');
            return;
        }
        // Check for NULL energy
        if (energy === null) {
            setAlert(
                "Sorry! We don't have information about this food, you can enter details manually",
                'warning'
            );
            return;
        }
        // Calculate energy
        energy = (parseFloat(energy) / 100) * parseFloat(amount);
        // Action Call
        addCaloriesIntaken({ diet, energy }, history);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.gridLeft} item xs={12} sm={6}>
                    <img
                        className={classes.foodImage}
                        src='images/food.svg'
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
                        Add your calories taken today
                    </Typography>
                    <FoodInput setDiet={setDiet} />
                    <AmountInput amount={amount} setAmount={setAmount} />
                    <SubmitButton handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </div>
    );
};

CaloriesIntake.propTypes = {
    addCaloriesIntaken: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, addCaloriesIntaken })(
    withRouter(CaloriesIntake)
);
