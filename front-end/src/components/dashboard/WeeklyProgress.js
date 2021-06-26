import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography,
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
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

const WeeklyProgress = () => {
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
                            WEEKLY PROGRESS
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            62.5%
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            style={{
                                backgroundColor: orange[600],
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
                        value={62.5}
                        variant='determinate'
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default WeeklyProgress;
