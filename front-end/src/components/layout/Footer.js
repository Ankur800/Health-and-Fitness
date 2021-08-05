import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CallIcon from '@material-ui/icons/Call';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        backgroundColor: 'rgb(22, 12, 66)',
        animation: `$slide 2000ms ${theme.transitions.easing.easeInOut}`,
        transition: '200ms',
    },
    paper2: {
        boxShadow: 'none',
        padding: theme.spacing(4),
        textAlign: 'center',
        backgroundColor: '#38d39f',
        transition: '200ms',
    },
    '@keyframes slide': {
        '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
        },
        '100%': {
            opacity: '1',
            transform: 'translateY(0)',
        },
    },
    footer: {
        paddingTop: theme.spacing(12),
        padding: '1vw',
        background: '#38d39f',
    },
    heading: {
        fontSize: '1.6em',
        color: '#fff',
    },
    subHeading: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        fontSize: '1.3em',
        color: '#fff',
    },
    smallHeading: {
        marginTop: theme.spacing(2),
        fontSize: '1.1em',
        color: '#fff',
    },
    socialHeading: {
        marginTop: theme.spacing(8.8),
        fontSize: '1.1em',
        color: '#fff',
    },
    data: {
        marginTop: theme.spacing(2),
        fontSize: '1em',
        color: '#fff',
    },
    hopData: {
        marginTop: theme.spacing(10),
        fontSize: '1em',
        color: '#fff',
    },
    mail: {
        textDecoration: 'none',
        color: '#fff',
    },
    btn: {
        textTransform: 'capitalize',
        marginTop: theme.spacing(4.6),
        width: '90%',
        background: '#fff',
        '&:hover': {
            background: '#38d39f',
        },
    },
    socialBtn: {
        color: '#fff',
        fontSize: '1.9em',
        '&:hover': {
            color: '#38d39f',
        },
    },
    copyright: {
        paddingTop: theme.spacing(8),
        display: 'flex',
    },
    logoDiv: {
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20vh',
    },
    img: {
        height: '100%',
        width: '100%',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.heading}>Services</h1>
                        <h2 className={classes.subHeading}>Customer Service</h2>
                        <h4 className={classes.data}>
                            <Badge color='secondary'>
                                <CallIcon />
                            </Badge>{' '}
                            <Badge color='secondary'>
                                <Typography style={{ color: '#fff' }}>
                                    +91 8896631859
                                </Typography>
                            </Badge>
                        </h4>
                        <h4 className={classes.data}>
                            <Badge color='secondary'>
                                <ScheduleIcon />
                            </Badge>{' '}
                            <Badge color='secondary'>
                                <Typography style={{ color: '#fff' }}>
                                    Monday to Friday: 10:00am - 9:00pm IST
                                </Typography>
                            </Badge>
                        </h4>
                        <h4 className={classes.data}>
                            <Badge color='secondary'>
                                <MailIcon />
                            </Badge>{' '}
                            <Badge color='secondary'>
                                <Typography>
                                    <a
                                        className={classes.mail}
                                        href='mailto:contact@fashioo.in'
                                    >
                                        contact@fitness.in
                                    </a>
                                </Typography>
                            </Badge>
                        </h4>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.heading}>Blogs and Media</h1>
                        <h2 className={classes.hopData}>To Hop with us</h2>
                        <Button size='large' className={classes.btn}>
                            Subscribe
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.heading}>About us & More</h1>
                        <h2 className={classes.socialHeading}>
                            Social Media Handles
                        </h2>
                        <h4 className={classes.data}>
                            <Badge color='secondary'>
                                <IconButton>
                                    <FacebookIcon
                                        className={classes.socialBtn}
                                    />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon
                                        className={classes.socialBtn}
                                    />
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon
                                        className={classes.socialBtn}
                                    />
                                </IconButton>
                                <IconButton>
                                    <YouTubeIcon
                                        className={classes.socialBtn}
                                    />
                                </IconButton>
                            </Badge>
                        </h4>
                    </Paper>
                </Grid>
            </Grid>
            <Divider style={{ marginTop: '5%' }} />
            <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={classes.paper2}>
                        <div>
                            <Badge>
                                <CopyrightIcon />
                            </Badge>
                            <Badge>
                                <Typography>
                                    Health & Fitness 2021. All rights reserved.
                                </Typography>
                            </Badge>
                        </div>

                        <div className={classes.logoDiv}>
                            <img
                                className={classes.img}
                                src='./images/logo.svg'
                                alt='logo-img'
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
