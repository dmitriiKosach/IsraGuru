import React from "react";
import { Container } from "../../styles/ContainerStyles";
import styles from "./SignUp.module.css";



const SignUp = () => {
    return <React.Fragment>
        <Container>
            <div className={styles.register_wrapper}>
                <div className={styles.register_left} />
                <div className={styles.register_right}>
                    <h1 className={styles.register_title}>SignUn</h1>
                    <div className={styles.register_form_wrapper}>
                        <form className={styles.register_form} >
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>FirstName</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="text" placeholder="Username" />
                                </div>
                            </div>
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>LastName</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="text" placeholder="Last  name" />
                                </div>
                            </div>
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>Email</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="email" placeholder="exemple@mail.com" />
                                </div>
                            </div>
                            <div className={styles.input_wrapper} >
                                <label className={styles.label}>Password</label>
                                <div className={styles.input_inner}>
                                    {/*<img className={styles.icon_search} src="" alt=""/>*/}
                                    <input className={styles.input} type="password" placeholder="Password" />
                                </div>
                            </div>
                            <button className={styles.login_form_button} type="submit">
                                <span>SignUp</span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </React.Fragment>
}

export default SignUp;
