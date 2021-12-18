import React, {useState} from "react";
import styles from './SignInModal.module.css';
import {NavLink} from "react-router-dom";
import {PATH_SIGN_UP} from "../../../config/config_navigation";
import {FaApple, FaFacebookSquare, FaGoogle} from "react-icons/all";
import {login} from "../../../actions/authAction";
import store from '../../../store/store';


const SignInModal = (props) => {
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    // const [errors, setErrors] = useState({
    //     username: '',
    //     password: ''
    // })
    // const users = useSelector(state => state.guides.guides);

    function onChangeCredentials(event){
        event.preventDefault();
        switch (event.target.name){
            case 'username':
                setData({...data, username: event.target.value});
                break;
            case 'password':
                setData({...data, password: event.target.value});
                break;
            default:
                break;
        }
    }

    function onLogin(){
        store.dispatch(login(data))
            .then(() => {
                setData({...data, username: "", password: ""});
                props.updateShowLogin(false);
            })
            .catch(() => {
                props.updateShowLogin(true);
                alert("Wrong credentials")
            })

    }

    return <React.Fragment>

            <div className={styles.login_wrapper}/>
            <div className={styles.login_form_wrapper}>
                <form className={styles.login_form}   >
                    <h1 className={styles.login_title}>SignIn</h1>
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
                            <input className={styles.input} onChange={onChangeCredentials} type="text" name="username" placeholder="Username"/>
                        </div>
                    </div>
                    <div className={styles.input_wrapper} >
                        <label className={styles.label}>Password</label>
                        <div className={styles.input_inner}>
                            {/*<img className={styles.icon_search} src="" alt=""/>*/}
                            <input className={styles.input} onChange={onChangeCredentials} type="password" name="password" placeholder="Password"/>
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
                    <button onClick={onLogin} className={styles.login_form_button} type="button">
                        <span>SignIn</span>
                    </button>

                </form>
            </div>



    </React.Fragment>
}

export default SignInModal;
