import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../2-authorization/2-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../2-authorization/3-register/register-1-ui/RegisterPage';
import ForgotPage from '../../2-authorization/4-forgot/forgot-1-ui/ForgotPage';

export const START_GH_PAGES_PATH = '/tour';
export const SIGN_IN_PATH = START_GH_PAGES_PATH + '/sign-in';
export const REGISTER_PATH = START_GH_PAGES_PATH + '/register';
export const FORGOT_PATH = START_GH_PAGES_PATH + '/forgot';
export const PROFILE_PATH = START_GH_PAGES_PATH + '/profile';

const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={START_GH_PAGES_PATH} render={() => <Redirect to={SIGN_IN_PATH}/>}/>
            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>
        </div>
    );
};

export default Routes;
