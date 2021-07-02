import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    colors,
} from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: theme.spacing(18),
    },
    bottomTexts: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
}));

const DonutView = ({ goal, burnt }) => {
    const classes = useStyles();

    goal = parseInt(goal);
    burnt = parseInt(burnt);

    const data = {
        datasets: [
            {
                data: [goal, burnt],
                backgroundColor: [colors.indigo[500], colors.orange[600]],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white,
            },
        ],
        labels: ["Today's Goal", "Today's Burnt"],
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: 'white',
            bodyFontColor: 'black',
            borderColor: 'black',
            borderWidth: 1,
            enabled: true,
            footerFontColor: 'black',
            intersect: false,
            mode: 'index',
            titleFontColor: 'black',
        },
    };

    const devices = [
        {
            title: "Today's Goal",
            value: goal,
            icon: AssignmentIcon,
            color: colors.indigo[500],
        },
        {
            title: "Today's Burnt",
            value: burnt,
            icon: InsertChartIcon,
            color: colors.orange[600],
        },
    ];

    return (
        <Card>
            <CardHeader title="Today's Progress" />
            <Divider />
            <CardContent>
                <Box
                    style={{
                        height: 400,
                        position: 'relative',
                    }}
                >
                    <Doughnut data={data} options={options} />
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2,
                    }}
                >
                    {devices.map(({ color, icon: Icon, title, value }) => (
                        <Box
                            key={title}
                            style={{
                                p: 1,
                                textAlign: 'center',
                            }}
                        >
                            <Icon color='action' />
                            <Typography
                                className={classes.bottomTexts}
                                color='textPrimary'
                                variant='h6'
                            >
                                {title}
                            </Typography>
                            <Typography
                                className={classes.bottomTexts}
                                style={{ color }}
                                variant='h5'
                            >
                                {value} cal
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default DonutView;
