import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: theme.spacing(18),
    },
    progress: {
        color: 'secondary',
    },
}));

const BurningProgress = ({ goal, burnt }) => {
    const classes = useStyles();

    const percentage = 100 * (parseFloat(burnt) / parseFloat(goal));

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
                            BURN PROGRESS
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            {parseInt(percentage)}% ({burnt} cal)
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
                            <InsertChartIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box style={{ pt: 3 }}>
                    <LinearProgress
                        className={classes.progress}
                        value={percentage}
                        variant='determinate'
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default BurningProgress;
