const LoginUnsuccessScreen = ({
    returnToLoginFormHandle,
}) => {
    return (
        <div className='auth-form-container'>
            <h2>Login unsuccessful, please try again.</h2>
            <p>Click here to go back to LogIn page</p>
            <button onClick={returnToLoginFormHandle}>
                Back to LogIn
            </button>
        </div>
    );
}
 
export default LoginUnsuccessScreen;