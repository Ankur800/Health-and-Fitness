import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './landing.css';

const Landing = ({ isAuthenticated }) => {
    // Redirect if already logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div className='main-container'>
            <p className='main-heading'>
                Welcome to Health & Fitness Web Application
            </p>

            <p className='main-description'>
                A clean and simple interface to organize your diets and workouts
                to keep yourself fit and healthy. Your diets and workouts will
                be managed in the form of calories. We are following the WHO
                standards to provide you premium quality services.
            </p>
            <Link to='/register'>
                <div className='get-started-btn'>
                    <button
                        className='btn-getStarted'
                        type='button'
                        name='button'
                    >
                        Get Started For Free
                    </button>
                </div>
            </Link>

            <img
                className='mockup-image'
                src='./images/landing-img.svg'
                alt='screen-mockups'
            />

            <div className='communities-data'>
                <img
                    className='communities-image'
                    src='./images/landing-data1.svg'
                    alt='communities-icon'
                />
                <p className='communities-info'>Personalized</p>
                <p className='communities-des'>Personalized Interface</p>
            </div>

            <div className='messages-data'>
                <img
                    className='messages-image'
                    src='./images/landing-data2.svg'
                    alt='messages-icon'
                />
                <p className='messages-info'>Premium</p>
                <p className='messages-des'>Follows WHO standards</p>
            </div>

            <img
                className='top-curve-white'
                src='images/bg-section-top-desktop-1.svg'
                alt='top-curve'
            />

            <div className='grow-together'>
                <table>
                    <tr>
                        <td className='grow-together-left'>
                            <h1 className='grow-together-head'>Our Features</h1>
                            <p>
                                We will provide all your informations including
                                diets intaken and calories burnt in the form of
                                calories. Calories are standard way to measure
                                fat and energy. So, we follow WHO standards to
                                provide you the best experience to get maximum
                                results.
                            </p>
                        </td>
                        <td className='grow-together-right'>
                            <img
                                className='grow-together-image'
                                src='./images/fitness-level.svg'
                                alt='grow-together-image'
                            />
                        </td>
                    </tr>
                </table>
            </div>

            <img
                className='top-curve-white'
                src='images/bg-section-bottom-desktop-1.svg'
                alt='bottom-curve'
            />

            <div className='flowing-conversation'>
                <table>
                    <tr>
                        <td className='flowing-conversation-left'>
                            <img
                                className='flowing-conversation-image'
                                src='./images/personal-train.svg'
                                alt='grow-together-image'
                            />
                        </td>
                        <td className='flowing-conversation-right'>
                            <h1 className='flowing-conversation-head'>
                                Our Standards
                            </h1>
                            <p>
                                We will all the standards as provided by trusted
                                sources. We have 2k+ data to provide you the
                                best experience ever. You can trust at us for
                                the maximum results. With maximum of results we
                                also ensure you about the precise result
                                predictions.
                            </p>
                        </td>
                    </tr>
                </table>
            </div>

            <p className='down-main-heading'>Ready To Join?</p>

            <Link to='/register'>
                <div className='get-started-btn'>
                    <button
                        className='btn-getStarted'
                        type='button'
                        name='button'
                    >
                        Get Started For Free
                    </button>
                </div>
            </Link>

            <div className='useless'></div>
        </div>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
