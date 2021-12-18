import React from "react";
import styles from './SignIn.module.css';
import {NavLink} from "react-router-dom";
import {PATH_SIGN_UP} from "../../../config/config_navigation";
import {FaApple, FaFacebookSquare, FaGoogle} from "react-icons/all";
import { Container } from "../../styles/ContainerStyles";

const SignIn = () => {

    return <React.Fragment>
        <Container>
            <div className={styles.login_wrapper}>
                <div className={styles.login_left}/>
                <div className={styles.login_right}>
                    <h1 className={styles.login_title}>SignIn</h1>
                    <div className={styles.login_form_wrapper}>

                        <form className={styles.login_form} >
                            <div className={styles.login_social_wrapper}>
                                <button className={styles.login_social_button}>
                                    <FaFacebookSquare className={styles.login_social_icon}/>
                                </button>
                                <button className={styles.login_social_button}>
                                    <FaApple className={styles.login_social_icon}/>
                                </button>
                                <button className={styles.login_social_button}>
                                    <FaGoogle className={styles.login_social_icon}/>
                                </button>
                            </div>
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>UserName</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="text" placeholder="Username"/>
                                </div>
                            </div>
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>Password</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className={styles.login_form_link_wrapper}>
                                <span className={styles.login_form_link}>
                                    <NavLink to={PATH_SIGN_UP}> Forgot  password?</NavLink>
                                </span>
                                <span className={styles.login_form_link}>New to IsraGuru?
                                    <NavLink to={PATH_SIGN_UP}> SignUp </NavLink>
                                </span>
                            </div>
                            <button  className={styles.login_form_button} type="submit">
                                <span>SignIn</span>
                            </button>

                        </form>
                    </div>

                </div>

            </div>

        </Container>

    </React.Fragment>
}

export default SignIn;
