import React, { useEffect } from 'react';

const Register = () => {
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
                                <input type='text' className='input' />
                            </div>
                        </div>
                        <div className='input-div one'>
                            <div className='i'>
                                <i className='fas fa-envelope'></i>
                            </div>
                            <div className='div'>
                                <h5>Email</h5>
                                <input type='text' className='input' />
                            </div>
                        </div>
                        <div className='input-div pass'>
                            <div className='i'>
                                <i className='fas fa-lock'></i>
                            </div>
                            <div className='div'>
                                <h5>Password</h5>
                                <input type='password' className='input' />
                            </div>
                        </div>
                        {
                            //<a href='#'>Forgot Password?</a>
                        }
                        <input type='submit' className='btn' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
