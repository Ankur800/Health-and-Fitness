import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: theme.spacing(18),
    },
}));

const BurningGoal = ({ goal }) => {
    const classes = useStyles();

    goal = parseInt(goal);

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    style={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color='textSecondary'
                            gutterBottom
                            variant='h6'
                        >
                            BURNING GOAL
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            {goal} cal
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            style={{
                                backgroundColor: indigo[600],
                                height: 56,
                                width: 56,
                            }}
                        >
                            <AssignmentIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default BurningGoal;
