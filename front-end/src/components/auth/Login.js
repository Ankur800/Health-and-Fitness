import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import { Redirect } from 'react-router-dom';

import './styles.css';

const Login = ({ setAlert, login, isAuthenticated }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
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

        if (user.email === '') {
            setAlert("Email can't be empty!", 'error');
        } else if (user.password === '') {
            setAlert("Password can't be empty!", 'error');
        } else {
            //HIT API
            login(user.email, user.password);
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
                    <img src='images/personal-train.svg' alt='svg-train-img' />
                </div>
                <div className='login-content'>
                    <form action='index.html'>
                        <img src='images/avatar.svg' alt='dummy-avatar' />
                        <h2 className='title'>Sign In</h2>
                        <div className='input-div one'>
                            <div className='i'>
                                <i className='fas fa-user'></i>
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
                                    name='password'
                                    type='password'
                                    className='input'
                                    value={user.password}
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
                            value='Login'
                            onClick={handleSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
