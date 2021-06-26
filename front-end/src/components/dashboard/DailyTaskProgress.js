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
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
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

const DailyTaskProgress = () => {
    const classes = useStyles();

    const data = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: [
                    colors.indigo[500],
                    colors.red[600],
                    colors.orange[600],
                ],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white,
            },
        ],
        labels: ['Desktop', 'Tablet', 'Mobile'],
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
            title: 'Desktop',
            value: 63,
            icon: LaptopMacIcon,
            color: colors.indigo[500],
        },
        {
            title: 'Tablet',
            value: 15,
            icon: TabletIcon,
            color: colors.red[600],
        },
        {
            title: 'Mobile',
            value: 23,
            icon: PhoneIcon,
            color: colors.orange[600],
        },
    ];

    return (
        <Card>
            <CardHeader title='Traffic by Device' />
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
                                {value}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default DailyTaskProgress;
