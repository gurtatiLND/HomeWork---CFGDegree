import { useSelector } from "react-redux"; 
import { selectUser } from "./userSlice";


 const LoginSuccessScreen = ({
    returnToLoginFormHandle,
 }) => {
    
    const user = useSelector(selectUser);


    return (
        <div className='auth-form-container'>
            <h2>{ user.name }, Welcome! You have successfully logged in!</h2>
            <p>Click here to Sign Out</p>
            <button onClick={returnToLoginFormHandle}>Sign Out</button>
        </div>
    );
}

export default LoginSuccessScreen;