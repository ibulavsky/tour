import React from 'react';
import styles from "./register-1-ui-styles/Register.module.scss";

interface RegisterProps {

}

interface RegisterProps {
    email: string,
    passwordFirst: string,
    passwordSecond: string,
    onSetEmail: (email: string) => void,
    onSetFirstPassword: (passwordFirst: string) => void,
    onSetSecondPassword: (passwordSecond: string) => void,
    onSubmit: () => void,
    errorMessage: string
}

const Register: React.FC<RegisterProps> = ({email, passwordFirst, passwordSecond, onSetEmail, onSetFirstPassword, onSetSecondPassword, onSubmit, errorMessage}) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Форма регистрации</h2>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <input type={"e-mail"} placeholder={'Your e-mail'} value={email}
                               onChange={e => onSetEmail(e.currentTarget.value)}/>
                    </div>
                    <div className={styles.form}>
                        <input type={"password"} placeholder={'Enter password'}
                               value={passwordFirst}
                               onChange={e => onSetFirstPassword(e.currentTarget.value)}/>
                    </div>
                    <div className={styles.form}>
                        <input type={"password"} placeholder={'Enter password'}
                               value={passwordSecond}
                               onChange={e => onSetSecondPassword(e.currentTarget.value)}/>
                    </div>
                    <button className={styles.button} onClick={onSubmit}>Register</button>
                    <div>{errorMessage}</div>
                </div>
            </div>
        </div>
    );
};

export default Register;
