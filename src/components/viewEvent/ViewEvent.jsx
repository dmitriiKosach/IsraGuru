import React from "react";
import styles from './ViewEvent.module.css'
import { NavLink, useHistory } from "react-router-dom";
import { PATH_GUIDE_INFO, PATH_LIST_EVENTS, PATH_SIGN_UP_EVENT } from "../../config/config_navigation";
import cap from '../../images/students-cap.svg';
import information from '../../images/information.svg';
import GuideIconButton from "../helpers/guideIconButton/GuideIconButton.jsx";
import close from "../../images/close.svg";
import InfoExcursion from "../helpers/infoExcursion/InfoExcursion";
import SimpleMapGoogle from "../helpers/simpleMapGoogle/SimpleMapGoogle";
import CarouselImage from "../helpers/carousel/Carousel";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import { ButtonBig } from "../styles/ButtonBigStyles";
import { ButtonClose } from "../styles/ButtonCloseStyles";
import { Container } from "../styles/ContainerStyles";
import {useCurrent} from "../current/CurrentProvider";

const ViewEvent = () => {
    const history = useHistory();
    const {guide, event, isTourist} = useCurrent();
    const viewLabelLevel = useSelector(state => state.language.lang.excursionLabelLevel);
    const viewLocationTitle = useSelector(state => state.language.lang.viewEvent.locationTitle);
    const viewTitleInfo = useSelector(state => state.language.lang.viewEvent.masaInfoTitle);
    const buttonGo = useSelector(state => state.language.lang.buttonGo)

    const closeViewEvent = () => {
        history.push(PATH_LIST_EVENTS);
    }

    const showSignUpEvent = () => {
        history.push(PATH_SIGN_UP_EVENT);
    }

    return <React.Fragment>
        {!isTourist ? <Header /> : null}
        <Container>
            <ButtonClose onClick={closeViewEvent}>
                <img src={close} alt="" />
            </ButtonClose>
            <div className={styles.view}>
                <NavLink to={PATH_GUIDE_INFO} key={PATH_GUIDE_INFO}>
                    <div className={styles.view_profile} style={isTourist === true ? null : { top: "85px" }}>
                        <GuideIconButton lastName={guide.lastName} firstName={guide.firstName} image={guide.image} isAvatar="true" isCurrentUser="false" />
                    </div>
                </NavLink>

                <div className={styles.view_left}>
                    <div className={styles.info_images_carousel} style={isTourist === true ? null : { top: "127px" }}>
                        <CarouselImage data={event.i} />
                    </div>
                    <div className={styles.info_excursion_map} style={isTourist === true ? null : { top: "1235px" }}>
                        <SimpleMapGoogle location={event.meetingPoint.description} />
                    </div>
                </div>

                <div className={styles.view_right} style={isTourist === true ? null : { paddingTop: "30px" }}>
                    <div className={styles.view_title_wrapper}>
                        <span className={styles.helper_view_char}>{(event.title).substr(0, 1)}</span>
                        <h1 className={styles.view_title}>
                            {(event.title).substring(1, (event.title).length)}
                        </h1>
                    </div>
                    <span className={styles.view_subtitle}>
                        {event.shortDescription}
                    </span>
                    <div className={styles.info_excursion} style={{ marginTop: '26px', marginRight: '101px' }}>
                        <InfoExcursion
                            date={event.date}
                            start={event.timeStarts}
                            end={event.timeEnds}
                            location={event.meetingPoint.description}
                            price={event.price.value}
                            quantity={event.placesLeft}
                        />
                    </div>
                    <p className={styles.view_content}>
                        {event.fullDescription}
                    </p>
                    <div className={styles.helper_view_border} />
                    <h2 className={styles.view_location_title}>{viewLocationTitle}</h2>
                    <p className={styles.view_location_subtitle}>
                        {event.meetingPoint.fullDescription}
                    </p>
                    <span className={styles.view_info}>
                        <img src={information} alt=" " />
                        <span>{viewTitleInfo}</span>
                    </span>
                    <span className={styles.view_info} style={{ marginTop: '11px' }}>
                        <img src={cap} alt="" />
                        <span>{viewLabelLevel + " " + event.difficultyLevel.title + " " + event.difficultyLevel.comment + "."}</span>
                    </span>
                    <div className={styles.helper_view_border} />
                    <div className={styles.info_excursion} style={{ marginRight: '450px' }}>
                        <InfoExcursion
                            date={event.date}
                            start={event.timeStarts}
                            end={event.timeEnds}
                            location={event.meetingPoint.description}
                            price={event.price.value}
                            quantity={event.placesLeft}
                        />
                    </div>
                    <ButtonBig onClick={() => showSignUpEvent()} className={styles.button_link} style={isTourist === true ? { top: '55px', right: '83px' } : { top: '85px', right: '83px' }} isAnimate="false">
                        <span>{buttonGo}</span>
                    </ButtonBig>
                    <ButtonBig onClick={() => showSignUpEvent()} className={styles.button_link} style={{ top: '1584px', right: '83px' }} isAnimate="false">
                        <span>{buttonGo}</span>
                    </ButtonBig>
                </div>
            </div>
        </Container>
    </React.Fragment>
}
export default ViewEvent;
