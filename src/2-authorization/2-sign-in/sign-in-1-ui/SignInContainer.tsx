import React, {useState} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../1-main/main-2-bll/store";
import {loginThunk} from "../sign-in-2-bll/signInThunks";
import {loginValidate} from "../../../7-helpers/validators/validator";
import {PROFILE_PATH} from "../../../1-main/main-1-ui/Routes";
import {Redirect} from 'react-router-dom';

interface SignInContainerIProps {

}

const SignInContainer: React.FC<SignInContainerIProps> = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [onErrorMessage, setErrorMessage] = useState('');

    //use dispatch
    const dispatch = useDispatch();

    // use selectors
    const {isAuth, isFetching, errorMessage} = useSelector((store: IAppStore) => (store.signIn));

    // logic
    const onEmailChange = (login: string) => {
        changeEmail(login)
    };
    const onPasswordChange = (password: string) => {
        changePassword(password)
    };
    const onRememberChange = (isRememberMe: boolean) => {
        changeRememberMe(isRememberMe)
    };
    const onSubmitLogin = () => {
        const errorText = loginValidate(email, password);
        if (errorText) {
            setErrorMessage(errorText)
        } else {
            setErrorMessage('');
            dispatch(loginThunk(email, password, isRememberMe))
        }
    };

    return (
        <>
            {isAuth
                ? <Redirect to={PROFILE_PATH}/>
                : <SignIn rememberMe={isRememberMe} email={email} password={password}
                          errorMessage={errorMessage + onErrorMessage}
                          onEmailChanged={onEmailChange} onPasswordChanged={onPasswordChange}
                          onSubmit={onSubmitLogin}
                          isFetching={isFetching}
                          onRememberChange={onRememberChange}/>
            }
        </>
    );
};

export default SignInContainer;
