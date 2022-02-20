import {Fragment,useContext} from "react";
import AuthForm from "../Components/Auth/AuthForm";
import LoginSuccessful from "../Components/Auth/LoginSuccessful";
import RegistrationSuccessful from "../Components/Auth/RegistrationSuccessful";
import UserDataContext from "../Components/DataStore/UserData-Context";



const AuthPage = () => {

    const userDataCtx = useContext(UserDataContext);
    const isLoggedIn =userDataCtx.isLoggedIn;
    const isRegistered = userDataCtx.isRegistered;

    return <Fragment>
        {isRegistered && !isLoggedIn && <RegistrationSuccessful/>}
        {!isLoggedIn && <AuthForm/>}
        {isLoggedIn && <LoginSuccessful/>}
        </Fragment>
};

export default AuthPage;