import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TodayProgress from './TodayProgress';
import TodayGoal from './TodayGoal';
import WeeklyProgress from './WeeklyProgress';
import CalorieCount from './CalorieCount';
import DailyTaskProgress from './DailyTaskProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    topGrid: {
        marginTop: theme.spacing(2),
    },
    dashboardImage: {
        height: theme.spacing(60),
        width: theme.spacing(60),
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(10),
    },
}));

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
    const classes = useStyles();

    useEffect(() => {
        getCurrentProfile();
    }, []);

    console.log(profile);

    return (
        <div className={classes.root}>
            <Grid className={classes.topGrid} container spacing={3}>
                <Grid item xs={12} md={3} sm={6}>
                    <TodayGoal />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <TodayProgress />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <WeeklyProgress />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <CalorieCount />
                </Grid>
            </Grid>
            <Grid className={classes.topGrid} container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <DailyTaskProgress />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        className={classes.dashboardImage}
                        src='./images/dashboard.svg'
                    />
                </Grid>
            </Grid>
        </div>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
