import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './styles.css';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    useEffect(() => {
        const inputs = document.querySelectorAll('.input');

        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add('focus');
        }

        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value === '') {
                parent.classList.remove('focus');
            }
        }

        inputs.forEach((input) => {
            input.addEventListener('focus', addcl);
            input.addEventListener('blur', remcl);
        });
    }, []);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.name === '') {
            setAlert("Name can't be empty!", 'error');
        } else if (user.email === '') {
            setAlert("Email can't be empty!", 'error');
        } else if (!validator.isEmail(user.email)) {
            setAlert('Email is invalid!', 'error');
        } else if (user.password1 === '') {
            setAlert("Password can't be empty!", 'error');
        } else if (user.password2 === '') {
            setAlert("Password can't be empty!", 'error');
        } else if (user.password1 !== user.password2) {
            setAlert('Passwords are not matching', 'error');
        } else {
            // API HIT
            register({
                name: user.name,
                email: user.email,
                password: user.password1,
            });
        }
    };

    // Redirect if already logged in
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div>
            <img className='wave' src='images/wave.png' alt='background-svg' />
            <div className='container'>
                <div className='img'>
                    <img src='images/run-phone.svg' alt='svg-phone-img' />
                </div>
                <div className='login-content'>
                    <form action='index.html'>
                        <img src='images/avatar.svg' alt='dummy-avatar' />
                        <h2 className='title'>Sign Up</h2>
                        <div className='input-div one'>
                            <div className='i'>
                                <i className='fas fa-user'></i>
                            </div>
                            <div className='div'>
                                <h5>Your Name</h5>
                                <input
                                    name='name'
                                    type='text'
                                    className='input'
                                    value={user.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='input-div one'>
                            <div className='i'>
                                <i className='fas fa-envelope'></i>
                            </div>
                            <div className='div'>
                                <h5>Email</h5>
                                <input
                                    name='email'
                                    type='text'
                                    className='input'
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='input-div pass'>
                            <div className='i'>
                                <i className='fas fa-lock'></i>
                            </div>
                            <div className='div'>
                                <h5>Password</h5>
                                <input
                                    name='password1'
                                    type='password'
                                    className='input'
                                    value={user.password1}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='input-div pass'>
                            <div className='i'>
                                <i className='fas fa-lock'></i>
                            </div>
                            <div className='div'>
                                <h5>Confirm Password</h5>
                                <input
                                    name='password2'
                                    type='password'
                                    className='input'
                                    value={user.password2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {
                            //<a href='#'>Forgot Password?</a>
                        }
                        <input
                            type='button'
                            className='btn'
                            value='Register'
                            onClick={handleSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
