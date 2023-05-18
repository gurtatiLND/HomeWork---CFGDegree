 const LoginSuccessScreen = ({
    returnToLoginFormHandle,
 }) => {
    return (
        <div className='auth-form-container'>
            <h2>Welcome! You have successfully logged in</h2>
            <p>Click here to Sign Out</p>
            <button onClick={returnToLoginFormHandle}>Sign Out</button>
        </div>
    );
}

export default LoginSuccessScreen;

