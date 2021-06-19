import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    leftGrid: {
        textAlign: 'right',
    },
    rightGrid: {
        textAlign: 'left',
    },
    img: {
        marginRight: theme.spacing(10),
        width: '300px',
    },
    rightContent: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        minWidth: 160,
    },
}));

const AgeInput = ({ setAnswer }) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    useEffect(() => {
        //console.log('age:' + age);
        setAnswer(age);
    }, [age]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.leftGrid} item xs={12} sm={6}>
                    <img
                        className={classes.img}
                        src='images/age.svg'
                        alt='gender-svg'
                    />
                </Grid>
                <Grid className={classes.rightGrid} item xs={12} sm={6}>
                    <FormControl
                        className={classes.rightContent}
                        component='fieldset'
                    >
                        <InputLabel id='demo-simple-select-label'>
                            Age
                        </InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Less than 18</MenuItem>
                            <MenuItem value={2}>Between 18 to 45</MenuItem>
                            <MenuItem value={3}>Between 45 to 65</MenuItem>
                            <MenuItem value={4}>More than 65</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    );
};

export default AgeInput;
