import React, { useState } from 'react';

const Login = () => {
    const [ email, setEmail] = useState('');
    const [ pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
              <label for="email">email</label>
              <input value={email} type="email" placeholder="youremail@mail.com" id="email" name="email" />
              <label for="password">password</label>
              <input value={pass} type="password" placeholder="**********" id="password" name="password" />
              <button type="submit">Log In</button>
          </form>
          <button>Don't you have an account? Register here.</button>
        </>
    )
}
 
export default Login;