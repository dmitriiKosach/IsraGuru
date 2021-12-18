import React, { useEffect } from "react";
import styles from "./Payment.module.css";
import { useHistory } from "react-router-dom";
import { PATH_THANK_YOU_PAGE } from "../../config/config_navigation";
import Header from "../header/Header";
import { Container } from "../styles/ContainerStyles";
import {useCurrent} from "../current/CurrentProvider";

const Payment = () => {
    const history = useHistory();
    const {isTourist} = useCurrent();


    useEffect(() => {
        setTimeout(() => {
            history.push(PATH_THANK_YOU_PAGE);
        }, 5000)
    })

    return <React.Fragment>
        {!isTourist ? <Header /> : null}
        <Container>
            <div className={styles.payment} >
                <div className={styles.payment_left} />
                <div className={styles.payment_right}>
                    <h1 className={styles.payment_title}>Оплата</h1>
                </div>
            </div>
        </Container>
    </React.Fragment>
}
export default Payment;
