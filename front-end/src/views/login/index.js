import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Alert from '../../components/alert';
import './styles.css';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState('Some Error Occured!');

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

    useEffect(() => {
        setAlert(false);
    }, [user]);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.email === '') {
            setAlert(true);
            setMessage("Email can't be empty!");
            return;
        }
        if (user.password === '') {
            setAlert(true);
            setMessage("Password can't be empty!");
            return;
        }

        if (!alert) {
            //console.log(user);
            // API CALL
            const data = {
                email: user.email,
                password: user.password,
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            try {
                const res = await axios.post(
                    'http://localhost:5000/api/auth',
                    data,
                    config
                );
                if (res) {
                    localStorage.setItem('token', res.data.token);
                } else {
                    console.log('Server Error');
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    };

    return (
        <div>
            {alert ? (
                <Alert state={alert} message={message} severity='error' />
            ) : null}

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

export default Login;
