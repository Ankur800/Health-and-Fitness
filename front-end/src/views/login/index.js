import React, { useEffect, useState } from 'react';

import Alert from '../../components/alert';
import './styles.css';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState('');

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

    const handleSubmit = (event) => {
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

        if (!alert && user.email !== '' && user.password !== '') {
            console.log(user);
            // API CALL
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
