import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import GenderIcon from '@material-ui/icons/Wc';
import HeightIcon from '@material-ui/icons/Height';
import WeightIcon from '@material-ui/icons/Accessibility';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GoalIcon from '@material-ui/icons/DirectionsRun';

import GoalInput from './GoalInput';
import AgeInput from './AgeInput';
import GenderInput from './GenderInput';
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import ActivityLevel from './ActivityLevel';
import WeeklyGoal from './WeeklyGoal';

import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle} />
            )}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

const ColorlibStepIcon = (props) => {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <AssignmentIcon />,
        2: <EventIcon />,
        3: <GenderIcon />,
        4: <HeightIcon />,
        5: <WeightIcon />,
        6: <FitnessCenterIcon />,
        7: <GoalIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
};

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    btn: {
        marginTop: theme.spacing(5),
        textAlign: 'center',
    },
}));

function getSteps() {
    return [
        'Goal',
        'Age',
        'Sex',
        'Height',
        'Weight',
        'Activity Level',
        'Weekly Goal',
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'What is your goal?';
        case 1:
            return 'Enter your age';
        case 2:
            return 'Select your gender';
        case 3:
            return 'Enter your height';
        case 4:
            return 'Enter your weight';
        case 5:
            return 'Choose which of the following best describe your general level of activity throughout the day';
        case 6:
            return 'What is your weekly goal?';
        default:
            return 'Unknown step';
    }
}

const CompleteProfile = ({ setAlert, createProfile, history }) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [answers, setAnswers] = useState({
        goal: null,
        age: null,
        sex: null,
        height: null,
        weight: null,
        activityLevel: null,
        weeklyGoal: null,
    });
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        console.log(answers);
        if (activeStep === 7) {
            createProfile(answers, history);
        }
    }, [answers]);

    const handleNext = () => {
        // VALIDATION
        if (activeStep === 1) {
            if (
                answer === '' ||
                parseInt(answer) <= 10 ||
                parseInt(answer) >= 90
            ) {
                setAlert('Invalid Age', 'error');
                return;
            }
        } else if (activeStep === 3) {
            if (
                answer === '' ||
                parseInt(answer) <= 120 ||
                parseInt(answer) >= 250
            ) {
                setAlert('Invalid Height', 'error');
                return;
            }
        } else if (activeStep === 4) {
            if (
                answer === '' ||
                parseInt(answer) <= 20 ||
                parseInt(answer) >= 500
            ) {
                setAlert('Invalid Weight', 'error');
                return;
            }
        } else if (activeStep === 5) {
            if (answer === '') {
                setAlert('Please select an option', 'error');
                return;
            }
        }

        //SAVING DATA INTO MAIN OBJECT
        switch (activeStep) {
            case 0:
                setAnswers({ ...answers, goal: answer });
                break;
            case 1:
                setAnswers({ ...answers, age: answer });
                break;
            case 2:
                setAnswers({ ...answers, sex: answer });
                break;
            case 3:
                setAnswers({ ...answers, height: answer });
                break;
            case 4:
                setAnswers({ ...answers, weight: answer });
                break;
            case 5:
                setAnswers({ ...answers, activityLevel: answer });
                break;
            case 6:
                setAnswers({ ...answers, weeklyGoal: answer });
                break;
            default:
                // TODO Remove it
                break;
        }

        if (activeStep === 6) {
            // CALL API HERE

            //createProfile(answers, history);

            console.log('Call API');
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        // We want to show prevously Input data
        if (activeStep - 1 === 0) {
            if (answers.age !== null) {
                setAnswer(answers.age);
            }
        }

        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // We do not need this often
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button
                            onClick={handleReset}
                            className={classes.button}
                        >
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography
                            variant='h5'
                            className={classes.instructions}
                        >
                            {getStepContent(activeStep)}
                        </Typography>

                        {activeStep === 0 ? (
                            <GoalInput setAnswer={setAnswer} />
                        ) : activeStep === 1 ? (
                            <AgeInput setAnswer={setAnswer} />
                        ) : activeStep === 2 ? (
                            <GenderInput setAnswer={setAnswer} />
                        ) : activeStep === 3 ? (
                            <HeightInput setAnswer={setAnswer} />
                        ) : activeStep === 4 ? (
                            <WeightInput setAnswer={setAnswer} />
                        ) : activeStep === 5 ? (
                            <ActivityLevel setAnswer={setAnswer} />
                        ) : activeStep === 6 ? (
                            <WeeklyGoal setAnswer={setAnswer} />
                        ) : null}

                        <div className={classes.btn}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant='contained'
                                style={{ background: '#38d39f', color: '#fff' }}
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

CompleteProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, createProfile })(
    withRouter(CompleteProfile)
);
