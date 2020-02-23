import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    FORGOT_PATH,
    REGISTER_PATH,
    SIGN_IN_PATH,
} from './Routes';

const Header: React.FC = () => {
    const [showOld, setShowOld] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <button style={{width: '145px'}}
                        onClick={() => setShowOld(!showOld)}>{showOld ? 'hide OldDev header' : 'show OldDev header'}</button>
                {showOld &&
                <div style={{
                    display: 'flex',
                    width: '100vh',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
                    <NavLink to={REGISTER_PATH}>register</NavLink>
                    <NavLink to={FORGOT_PATH}>forgot</NavLink>
                </div>
                }
            </div>
        </div>
    );
};

export default Header;
