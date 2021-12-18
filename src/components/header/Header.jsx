import React, {useState} from "react";
import styles from './Header.module.css';
import SignInModal from "../helpers/signInModal/SignInModal";
import SignUp from "../helpers/signUp/SignUp";
import {PATH_PROFILE} from "../../config/config_navigation";
import GuideIconButton from "../helpers/guideIconButton/GuideIconButton";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const user = useSelector(state => state.auth.user);

    const updateShowLogin = (flag) => {
        setShowLogin(flag);
    }

    return <React.Fragment>
        <div className={styles.container}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_inner}>
                    { user === null ?
                        <button className={styles.button_link} onClick={()=> {
                            updateShowLogin(true);
                            setShowRegister(false)
                        }}
                        >Sign in</button> : ""
                    }
                    {user === null ?
                        <button className={styles.button_link} onClick={() => {
                            setShowLogin(false)
                            setShowRegister(!showRegister)
                        }}>Sign up</button> : ""
                    }
                    {user !== null ?
                        <NavLink key={PATH_PROFILE} to={PATH_PROFILE} className={styles.header_profile}>
                                <GuideIconButton lastName={user.lastName} firstName={user.firstName} image={user.image} isCurrentUser="true"/>
                        </NavLink>: ""
                    }
                </div>
            </div>
            {showLogin === true ? <SignInModal updateShowLogin={updateShowLogin}/> : ""}
            {showRegister === true ? <SignUp/> : ""}

        </div>
    </React.Fragment>
}
export default Header;
