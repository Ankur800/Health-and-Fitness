import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: theme.spacing(18),
    },
}));

const ConsumptionGoal = ({ goal }) => {
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
                            CONSUMPTION GOAL
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            {goal} cal
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            style={{
                                backgroundColor: red[600],
                                height: 56,
                                width: 56,
                            }}
                        >
                            <MoneyIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ConsumptionGoal;
