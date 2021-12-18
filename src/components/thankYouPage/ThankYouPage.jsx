import React from "react";
import styles from './ThankYouPage.module.css'
import user from '../../images/user.svg';
import ticket from '../../images/Заливка цветом.png'
import GuideIconButton from "../helpers/guideIconButton/GuideIconButton.jsx";
import location from "../../images/location.svg";
import clock from "../../images/clock.svg";
import DateEvent from "../helpers/dateEvent/DateEvent";
import QRCode from "react-qr-code";
import {useHistory} from "react-router-dom";
import Header from "../header/Header";
import {PATH_LIST_EVENTS} from "../../config/config_navigation";
import {useSelector} from "react-redux";
import { Container } from "../styles/ContainerStyles";
import {useCurrent} from "../current/CurrentProvider";

const ThankYouPage = () => {
    const history = useHistory();
    const {order, isTourist} = useCurrent();
    const {updateOrder} = useCurrent();
    const lang = useSelector(state => state.language.lang);
    const date = new Date(order.date);
    let time = Number.parseInt(order.time.end).toFixed(0)-Number.parseInt(order.time.start).toFixed(0);
    const qrInfo = JSON.stringify(`name: ${order.name} email: ${order.email} phoneNumber: ${order.phone} location: ${order.location} date: ${order.date} start: ${order.time.start} end: ${order.time.end} person: ${order.count} guide: ${order.guide.firstName + " " + order.guide.lastName}`);

    return <React.Fragment>
        {!isTourist ? <Header/> : null}
        <Container>
            <img src={ticket} className={styles.ticket} alt=""/>
            <div className={styles.thank}>
                <div className={styles.thank_left}/>
                <div className={styles.thank_right}>
                    <h1 className={styles.thank_title}>Поздравляем, вам понравится</h1>
                    <h2 className={styles.thank_subtitle}>
                        {order.title}
                    </h2>
                    <div className={styles.thank_content_body}>
                        <div className={styles.thank_content_body_left}>
                            <DateEvent month={lang.monthsFull[date.getMonth()]} week={lang.weeks[date.getDay()]} day={('0' + date.getDate()).slice(-2)}/>
                        </div>

                        <div className={styles.thank_content_body_right}>
                            <div className={styles.thank_content_body_position}>
                                <img src={location} alt=""/>
                                <span>{order.location}</span>
                            </div>
                            <div className={styles.thank_content_body_time}>
                                <img src={clock} alt=""/>
                                <div>
                                    <span className={styles.thank_content_body_time_clock}>{order.time.start + " - " + order.time.end }</span>
                                    <span className={styles.thank_content_body_time_clock_subtitle}>{"(" + time + "часа)"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thank_content_footer}>
                        <div className={styles.thank_content_footer_profile}>
                            <GuideIconButton firstName={order.guide.firstName} lastName={order.guide.lastName} isAvatar="false"/>
                        </div>
                        <div className={styles.thank_content_footer_count} >
                            <img src={user} alt=""/>
                            <span>
                                {order.count + ' человек'}
                            </span>
                        </div>
                    </div>
                    <button onClick={()=> {
                        updateOrder({});
                        history.push(PATH_LIST_EVENTS);
                    }} className={styles.thank_button_save} type="button">
                        <span>Сохранить</span>
                    </button>
                    <button className={styles.thank_button_send} type="button">
                        <span>Поделиться в FB</span>
                    </button>
                    <div className={styles.ticket_qr}>
                        <QRCode bgColor='#f8f8f8' fgColor='#2B2D2F' value={qrInfo} size={145} />
                    </div>
                </div>
            </div>
        </Container>
    </React.Fragment>
}
export default ThankYouPage;
