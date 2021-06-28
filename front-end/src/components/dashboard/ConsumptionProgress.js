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
}));

const TodayProgress = ({ goal, intaken }) => {
    const classes = useStyles();

    const percentage = 100 * (intaken / goal);

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
                            INTAKE PROGRESS
                        </Typography>
                        <Typography color='textPrimary' variant='h6'>
                            {parseInt(percentage)}% ({intaken} cal)
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
                    <LinearProgress value={percentage} variant='determinate' />
                </Box>
            </CardContent>
        </Card>
    );
};

export default TodayProgress;
