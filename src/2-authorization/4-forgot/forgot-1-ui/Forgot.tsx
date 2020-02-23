import React from 'react';
import styles from './forgot-1-ui-styles/Forgot.module.scss'
import {Redirect} from "react-router";
import {REGISTER_PATH, SIGN_IN_PATH} from "../../../1-main/main-1-ui/Routes";
import {NavLink} from "react-router-dom";

interface ForgotProps {
    email: string,
    onSetEmail: (email: string) => void,
    onSubmit: () => void,
    errorMessage: string
}

const Forgot: React.FC<ForgotProps> = ({email, onSetEmail, onSubmit, errorMessage}) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Восстановление пароля</h2>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <input type={"e-mail"} placeholder={'Адрес почты'} value={email}
                               onChange={e => onSetEmail(e.currentTarget.value)}/>
                    </div>
                    <button className={styles.button} onClick={onSubmit}>Напомнить</button>
                    <mark className={styles.error}>{errorMessage}</mark>
                </div>
                <div className={styles.control}>
                    <NavLink to={REGISTER_PATH} className={styles.link}>Зарегистрироваться</NavLink>
                    <NavLink to={SIGN_IN_PATH} className={styles.link}>Помню пароль</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
