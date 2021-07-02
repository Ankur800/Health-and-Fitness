import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { getCurrentRecord } from '../../actions/record';

import CompleteProfile from '../complete-profile';

import BurningGoal from './BurningGoal';
import ConsumptionGoal from './ConsumptionGoal';
import DonutView from './DonutView';
import ConsumptionProgress from './ConsumptionProgress';
import BurningProgress from './BurningProgress';

import Spinner from '../layout/Spinner';

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

const Dashboard = ({
    getCurrentRecord,
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
    record: { record },
}) => {
    const classes = useStyles();

    useEffect(() => {
        getCurrentProfile();
        getCurrentRecord();
    }, [getCurrentProfile, getCurrentRecord]);

    //console.log(record);

    return loading && profile === null ? (
        <div className={classes.root}>
            <Spinner />
        </div>
    ) : profile !== null && record !== null ? (
        <div className={classes.root}>
            <Grid className={classes.topGrid} container spacing={3}>
                <Grid item xs={12} md={3} sm={6}>
                    <ConsumptionGoal goal={record.dailyCalorieIntakeGoal} />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <BurningGoal goal={record.dailyCalorieBurnGoal} />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <ConsumptionProgress
                        goal={record.dailyCalorieIntakeGoal}
                        intaken={record.todayCalorieTaken}
                    />
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <BurningProgress
                        goal={record.dailyCalorieBurnGoal}
                        burnt={record.todayCalorieBurnt}
                    />
                </Grid>
            </Grid>
            <Grid className={classes.topGrid} container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <DonutView
                        goal={record.dailyCalorieBurnGoal}
                        burnt={record.todayCalorieBurnt}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        className={classes.dashboardImage}
                        src='./images/dashboard.svg'
                        alt='dashboard-img'
                    />
                </Grid>
            </Grid>
        </div>
    ) : (
        <CompleteProfile />
    );
};

Dashboard.propTypes = {
    getCurrentRecord: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    record: state.record,
});

export default connect(mapStateToProps, {
    getCurrentProfile,
    getCurrentRecord,
})(Dashboard);
