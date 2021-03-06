import React from 'react';
import styles from './sign-in-1-ui-styles/SignIn.module.scss'
import Preloader from "../../../7-helpers/Preloader/Preloader";
import {FORGOT_PATH, REGISTER_PATH, SIGN_IN_PATH} from "../../../1-main/main-1-ui/Routes";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";

interface SignInProps {
    email: string
    password: string
    rememberMe: boolean
    errorMessage: string | undefined
    isFetching: boolean
    onEmailChanged: (login: string) => void
    onPasswordChanged: (password: string) => void
    onRememberChange: (rememberMe: boolean) => void
    onSubmit: () => void
}

const SignIn: React.FC<SignInProps> = ({
                                           email, password, errorMessage, rememberMe, isFetching, //variables
                                           onEmailChanged, onPasswordChanged, onRememberChange, onSubmit // callbacks
                                       }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Вход</h2>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <input type={"email"} placeholder={'Адрес почты'}
                               value={email}
                               onChange={e => onEmailChanged(e.currentTarget.value)}/>
                    </div>
                    <div className={styles.form}>
                        <input type={"password"} placeholder={'Пароль'}
                               value={password}
                               onChange={e => onPasswordChanged(e.currentTarget.value)}/>
                    </div>
                    {isFetching
                        ? <Preloader/>
                        : null}
                    <div className={styles.checkboxWrap}>
                        <input type={"checkbox"} placeholder={'rememberMe'}
                               checked={rememberMe} className={styles.checkbox}
                               onChange={e => onRememberChange(e.currentTarget.checked)}/>
                        <label className={styles.label}>запомнить</label>
                    </div>
                    <button className={styles.button} disabled={isFetching} onClick={onSubmit}>Войти</button>
                    {errorMessage && <mark className={styles.error}>{errorMessage}</mark>}
                </div>
                <div className={styles.control}>
                    <NavLink to={REGISTER_PATH} className={styles.link}>Зарегистрироваться</NavLink>
                    <NavLink to={FORGOT_PATH} className={styles.link}>Забыл пароль</NavLink>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
