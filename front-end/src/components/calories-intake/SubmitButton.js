import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const SubmitButton = ({ handleSubmit }) => {
    const classes = useStyles();

    return (
        <div>
            <Button
                size='large'
                variant='contained'
                color='secondary'
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={handleSubmit}
            >
                Add
            </Button>
        </div>
    );
};

export default SubmitButton;
