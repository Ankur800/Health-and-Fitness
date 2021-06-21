import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        marginTop: theme.spacing(2),
        width: '60%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const AlertBar = ({ alerts }) => {
    const classes = useStyles();

    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.id} className={classes.root}>
                <Alert severity={alert.alertType}>{alert.msg}</Alert>
            </div>
        ))
    );
};

AlertBar.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(AlertBar);
