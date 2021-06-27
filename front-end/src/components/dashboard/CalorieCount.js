import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: theme.spacing(18),
    },
}));

const CalorieCount = () => {
    const classes = useStyles();

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
                            CALORIE COUNT
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            1276 kcal
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
                            <AssignmentIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CalorieCount;
