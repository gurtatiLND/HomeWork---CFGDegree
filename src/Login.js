import React, { useState } from 'react';
import LoginSuccessScreen from './LoginSuccessScreen';
import LoginUnsuccessScreen from './LoginUnsuccessScreen';
import { useDispatch } from 'react-redux';
import { login, logout } from './userSlice';

const LOGIN = 'abc@mail.com';
const PASSWORD = 'qwer1234';
const STATES = {
    LOGIN_FORM: 'LOGIN_FORM',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_UNSUCCESS: 'LOGIN_UNSUCCESS',
};

const Login = () => {
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ pass, setPass] = useState('');
    const [currentForm, setCurrentForm] = useState(STATES.LOGIN_FORM);

    // show the conditions for email and password
    const validateForm = () => {
        if (email === LOGIN && pass === PASSWORD) {
            setCurrentForm(STATES.LOGIN_SUCCESS);
        } else {
            setCurrentForm(STATES.LOGIN_UNSUCCESS);
        }
    };

    const dispatch = useDispatch();

    const returnToLoginFormHandle = () => {
        setCurrentForm(STATES.LOGIN_FORM);

        dispatch(logout());
    };

    //use this to prevent reloading
    const handleSubmit = (e) => {
        e.preventDefault(); 

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn: true,
            })
        );
    };

    return (
        <>
            {currentForm === STATES.LOGIN_FORM && 
                <div className='auth-form-container'>
                    <h2>Login Page</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Enter name:</label>
                        <input
                            value={name}
                            type="name"
                            placeholder="Julia"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email">Enter email:</label>
                        <input
                            value={email}
                            type="email"
                            placeholder="youremail@mail.com"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Enter password:</label>
                        <input 
                            value={pass}
                            type="password"
                            placeholder="********"
                            id="password"
                            name="password"
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <button type="submit" onClick={validateForm}>Sign In</button>
                    </form>
                </div>
            }
            {currentForm === STATES.LOGIN_SUCCESS &&
                <LoginSuccessScreen 
                    user_name={name}
                    returnToLoginFormHandle={returnToLoginFormHandle} />
            } 
            {currentForm === STATES.LOGIN_UNSUCCESS && 
                <LoginUnsuccessScreen
                    returnToLoginFormHandle={returnToLoginFormHandle}
                />
            }
        </>
    )
}
 
export default Login;