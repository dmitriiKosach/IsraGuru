import React from "react";
import styles from "./GuideInfo.module.css";
import close from "../../images/close.svg";
import messenger from '../../images/messenger.png';
import phone_call from '../../images/phone-call.png';
import {PATH_VIEW_EVENT} from "../../config/config_navigation";
import {useHistory} from "react-router-dom";
import ExcursionSmall from "../helpers/excursionSmall/ExcursionSmall";
import Header from "../header/Header";
import {useSelector} from "react-redux";
import { Container } from "../styles/ContainerStyles";
import {useCurrent} from "../current/CurrentProvider";

const GuideInfo = () => {

    const history = useHistory();
    const {guide, isTourist} = useCurrent();
    const excursions = useSelector(state => state.filter.eventsFilter);

    const excursionFilter = excursions.filter((excursion) => {
        return excursion.guideId === guide.email ? excursion : '';
    });

    const closeGuideInfo = () => {
        history.push(PATH_VIEW_EVENT);
    }

    return <React.Fragment>
        {!isTourist ? <Header/> : null}
        <Container>
            <button onClick={closeGuideInfo} className={styles.button_close}>
                <img src={close} alt=""/>
            </button>
            <div className={styles.info}>
                <div  className={styles.info_left}>
                    <div className={styles.info_avatar}>
                        <img src={guide.image} alt=""/>
                    </div>
                </div>
                <div className={styles.info_right}>
                    <div className={styles.info_title_wrapper}>
                        <h1 className={styles.info_title}>{guide.firstName + ' ' + guide.lastName}</h1>
                        <p className={styles.info_subtitle}>{guide.licenseNumber}</p>
                    </div>
                    <div className={styles.info_content_wrapper}>
                        <h2 className={styles.info_content_title}>Кто я</h2>
                        <p className={styles.info_content_subtitle}>{guide.description}</p>
                    </div>
                    <div className={styles.info_excursions_wrapper}>
                        <h2 className={styles.info_footer_title}>Ближайшие экскурсии</h2>
                    </div>
                    {excursionFilter.map(excursion => {
                        return  <div key={excursion.id}>
                            <ExcursionSmall excursion={excursion} isShow='true'/>
                        </div>
                    })}
                    <div className={styles.info_footer_wrapper}>
                        <span className={styles.info_footer_title}>Я могу</span>
                        <p className={styles.info_footer_subtitle}>
                            Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                        </p>
                        <ul>
                            {guide.cities.map(city => {
                                return  <li key={city}>{city}</li>;
                            })}
                        </ul>
                    </div>
                    <div className={styles.info_contact_wrapper}>
                        <span className={styles.info_contact_title}>Связаться со мной</span>
                        <p className={styles.info_contact_phone}>
                            Телефон: {guide.phoneNumber1}
                        </p>
                        <p className={styles.info_contact_social}>
                            Соцсети и мессенджеры
                        </p>
                        <div className={styles.info_contact_social_icons}>
                            <a href="https://www.facebook.com" className={styles.info_contact_social_icon}>
                                <img src={messenger} alt=""/>
                            </a>
                            <a href="https://www.whatsapp.com" className={styles.info_contact_social_icon}>
                                <img src={phone_call} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </React.Fragment>
}


export default GuideInfo;
