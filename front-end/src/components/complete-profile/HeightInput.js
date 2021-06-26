import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
        display: 'flex',
    },
    img: {
        marginRight: theme.spacing(10),
        width: '300px',
    },
    rightContent: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(10),
        minWidth: 170,
    },
}));

const HeightInput = ({ setAnswer }) => {
    const classes = useStyles();
    const [height, setHeight] = useState('');

    useEffect(() => {
        //console.log('height: ' + height);
        setAnswer(height);
    }, [height, setAnswer]);

    const handleChange = (event) => {
        setHeight(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.leftGrid} item xs={12} sm={6}>
                    <img
                        className={classes.img}
                        src='images/height.svg'
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
                            name='height'
                            id='standard-basic'
                            label='Enter Height in centimetres'
                            value={height}
                            onChange={handleChange}
                        />
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default HeightInput;
