import React, { useEffect, useState } from "react";
import Excursion from "../helpers/excursion/Excursion";
import styles from "./SignupEvent.module.css";
import close from "../../images/close.svg";
import { PATH_PAYMENT, PATH_VIEW_EVENT } from "../../config/config_navigation";
import { useHistory } from "react-router-dom";
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import { useSelector } from "react-redux";
import Header from "../header/Header";
import { Container } from "../styles/ContainerStyles";
import { ButtonClose } from "../styles/ButtonCloseStyles";
import {useCurrent} from "../current/CurrentProvider";


const SignupEvent = () => {
    const history = useHistory();
    const {event, isTourist, guide, updateOrder} = useCurrent();
    const lang = useSelector(state => state.language.lang);
    const [checkForm, setCheckForm] = useState(true);
    const [order, setOrder] = useState({
        title: event.title,
        name: "",
        phone: "",
        email: "",
        count: 1,
        location: event.city,
        date: event.date,
        time: {
            start: event.timeStarts,
            end: event.timeEnds
        },
        guide: {
            firstName: guide.firstName,
            lastName: guide.lastName
        },
        isPay: false
    });
    const nameInputHandler = (event) => {
        event.preventDefault();
        setOrder({ ...order, name: event.target.value });
    }

    const phoneInputHandler = (event) => {
        event.preventDefault();
        setOrder({ ...order, phone: event.target.value });
    }

    const emailInputHandler = (event) => {
        event.preventDefault();
        setOrder({ ...order, email: event.target.value });
    }

    const addCountHandler = (event) => {
        event.preventDefault();
        setOrder({ ...order, count: order.count + 1 });
    }

    const deleteCountHandler = (event) => {
        event.preventDefault();
        setOrder({ ...order, count: order.count - 1 });
    }

    function onSubmit(event) {
        event.preventDefault();
        setOrder({ ...order, isPay: true });
        updateOrder(order);
        history.push(PATH_PAYMENT);
    }

    const closeSignupEvent = () => {
        history.push(PATH_VIEW_EVENT);
    }

    useEffect(() => {
        const formValid = () => {
            return !(order.name !== "" && order.email !== "" && order.phone !== "" && order.count !== 0);
        }
        setCheckForm(formValid());
    }, [order]);

    return <React.Fragment>
        {!isTourist ? <Header /> : null}
        <Container>
            <ButtonClose onClick={closeSignupEvent}>
                <img src={close} alt="" />
            </ButtonClose>
            <div className={styles.signup}>
                <div className={styles.signup_left} />
                <div className={styles.signup_right}>
                    <h1 className={styles.signup_title}>{lang.signUpTitle}</h1>
                    <form onSubmit={onSubmit} className={styles.signup_form} noValidate>
                        <input required onChange={nameInputHandler} className={styles.signup_form_input_name} type="text" name="name" placeholder={lang.signUpForm.name} />
                        <input required onChange={phoneInputHandler} className={styles.signup_form_input_phone} type="text" name="phone" placeholder={lang.signUpForm.phone} />
                        <input required onChange={emailInputHandler} className={styles.signup_form_input_email} type="email" name="email" placeholder={lang.signUpForm.email} />
                        <div className={styles.signup_form_quantity}>
                            <span className={styles.signup_form_title}>{lang.signUpForm.count.title}</span>
                            <span className={styles.signup_form_subtitle}>{"(" + lang.signUpForm.count.subtitle + " 10)"}</span>
                        </div>
                        <div className={styles.signup_button_counting_wrapper}>
                            <button disabled={+order.count === 1} onClick={deleteCountHandler} type='text' className={styles.signup_button_delete}>
                                <img src={minus} alt="" />
                            </button>
                            <div className={styles.signup_button_counting_title}>
                                <span>{order.count}</span>
                            </div>
                            <button disabled={+order.count === 10} onClick={addCountHandler} type='text' className={styles.signup_button_add}>
                                <img src={plus} alt="" style={{ color: 'blue' }} />
                            </button>
                        </div>
                        <button disabled={checkForm} className={styles.signup_form_button} type="submit">
                            <span>{lang.signUpForm.button}</span>
                        </button>
                    </form>
                    <div className={styles.signup_security_regulations}>
                        <span>
                            {lang.signUpForm.security.title + " "}
                            <a href=" ">{lang.signUpForm.security.subtitle}</a>.
                        </span>
                    </div>
                </div>
                <div className={styles.signup_details}>
                    <Excursion excursion={event} isShow='false' />
                </div>
                <div className={styles.signup_security_warning}>
                    <span className={styles.signup_security_warning_title}>{lang.signUpForm.warning.title}</span>
                    <span className={styles.signup_security_warning_subtitle}>{lang.signUpForm.warning.subtitle}</span>
                </div>
            </div>
        </Container>
    </React.Fragment>
}
export default SignupEvent;
