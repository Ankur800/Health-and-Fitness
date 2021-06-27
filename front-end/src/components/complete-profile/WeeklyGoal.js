import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    leftGrid: {
        textAlign: 'right',
    },
    rightGrid: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
    },
    img: {
        marginRight: theme.spacing(10),
        width: '300px',
    },
    rightContent: {
        marginLeft: theme.spacing(10),
    },
}));

const WeeklyGoal = ({ setAnswer }) => {
    const classes = useStyles();
    const [value, setValue] = useState('0.5');

    useEffect(() => {
        //console.log('fitness goal: ' + value);
        setAnswer(value);
    }, [value, setAnswer]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.leftGrid} item xs={12} sm={6}>
                    <img
                        className={classes.img}
                        src='images/fitness-goal.svg'
                        alt='gender-svg'
                    />
                </Grid>
                <Grid className={classes.rightGrid} item xs={12} sm={6}>
                    <FormControl
                        className={classes.rightContent}
                        component='fieldset'
                    >
                        <RadioGroup
                            aria-label='fitness'
                            name='fitness'
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value='0.25'
                                control={<Radio />}
                                label='Lose 0.25 kg per week'
                            />
                            <FormControlLabel
                                value='0.5'
                                control={<Radio />}
                                label='Lose 0.5 kg per week (Recommended)'
                            />
                            <FormControlLabel
                                value='0.75'
                                control={<Radio />}
                                label='Lose 0.75 kg per week'
                            />
                            <FormControlLabel
                                value='1'
                                control={<Radio />}
                                label='Lose 1 kg per week'
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
};

export default WeeklyGoal;
