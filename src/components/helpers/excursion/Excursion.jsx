import React, {useEffect, useState} from "react";
import styles from "./Excursion.module.css";
import {PATH_VIEW_EVENT} from "../../../config/config_navigation";
import location from '../../../images/location.svg'
import cap from '../../../images/students-cap.svg';
import clock from '../../../images/clock.svg';
import shekel from '../../../images/shekel.png';
import group from '../../../images/group.svg';
import {useHistory} from "react-router-dom";
import GuideIconButton from "../guideIconButton/GuideIconButton.jsx";
import DateEvent from "../dateEvent/DateEvent";
import {useSelector} from "react-redux";
import { ButtonBig } from "../../styles/ButtonBigStyles";
import {useCurrent} from "../../current/CurrentProvider";
import {getCurrency} from "../../../services/currencyService";


const Excursion = (props) => {
    const history = useHistory();
    let showButton = props.isShow;
    const excursion = props.excursion;
    const guides = useSelector(state => state.guides.guides);
    const date = new Date(excursion.date);
    const [currencyPrice, setCurrencyPrice] = useState( 0);
    const lang = useSelector(state => state.language.lang);
    const buttonDetail = useSelector(state => state.language.lang.buttonDetail);
    const excursionLabelLevel = useSelector(state => state.language.lang.excursionLabelLevel);
    const time = Number.parseInt(excursion.timeEnds).toFixed(0)-Number.parseInt(excursion.timeStarts).toFixed(0);

    const {updateGuide, updateEvent} = useCurrent();

    const showViewEvent = (excursion) => {
        updateGuide(guide);
        updateEvent(excursion)
        history.push(PATH_VIEW_EVENT);
    }

    const getGuide = (id) => {
        return guides.find(guide => {
            return guide.email === id ? guide : null;
        })
    }

    const guide = getGuide(excursion.guideId);
    useEffect(()=> {
        getCurrency()
            .then((response) => {
                let price = +response.data.conversion_rates.USD * +excursion.price.value;
                setCurrencyPrice(+price.toFixed(0));
            })
    }, [excursion.price.value])

    return <React.Fragment>
        <div className={styles.excursion_item} key=''>
            <div className={styles.excursion_item_image} style={{backgroundImage: `url(${excursion.images[0].image})`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
            <div className={styles.excursion_item_content_left}>
                <div className={styles.excursion_item_title}>{excursion.title}</div>
                <div className={styles.excursion_item_subtitle}>{excursion.shortDescription}</div>
                <div className={styles.excursion_item_level}>
                    <img src={cap} alt=""/>
                    <span>{excursionLabelLevel + " " + excursion.difficultyLevel.title + " " + excursion.difficultyLevel.comment + "."}</span>
                </div>
            </div>
            <div className={styles.excursion_item_content_center}>
                <div className={styles.excursion_item_content_center_date}>
                    <DateEvent month={lang.monthsFull[date.getMonth()]} week={lang.weeks[date.getDay()]} day={('0' + date.getDate()).slice(-2)}/>
                </div>
                <div className={styles.excursion_item_content_center_profile}>
                    <GuideIconButton lastName={guide.lastName} firstName={guide.firstName} image={guide.image} isAvatar="true"/>
                </div>

            </div>
            <div className={styles.excursion_item_content_right}>
                <div className={styles.excursion_item_position}>
                    <img src={location} alt=""/>
                    <span>{excursion.city}</span>
                </div>
                <div className={styles.excursion_item_time}>
                    <img src={clock} alt=""/>
                    <div>
                        <span className={styles.excursion_item_time_clock}>{excursion.timeStarts + " - " + excursion.timeEnds }</span>
                        <span className={styles.excursion_item_time_clock_subtitle}>{"(" + time + " " + lang.excursionTotalClock +")"}</span>
                    </div>
                </div>
                <div className={styles.excursion_item_price}>
                    <img src={shekel} alt=""/>
                    <div>
                        <span className={styles.excursion_item_price_shekel}>{excursion.price.value }</span>
                        <span className={styles.excursion_item_price_shekel_subtitle}>{"(≈$" + currencyPrice + ")"}</span>
                    </div>
                </div>
                <div className={styles.excursion_item_quantity}>
                    <img src={group} alt=""/>
                    <div>
                        <span className={styles.excursion_item_quantity_title}>{lang.excursionQuantityTitle + " "}</span>
                        <span className={styles.excursion_item_quantity_count}>{excursion.placesLeft}</span>
                    </div>
                </div>
                {showButton === 'true' ?
                    <ButtonBig onClick={() => showViewEvent(excursion)} className={styles.button_link} isAnimate="false">
                        <span>{buttonDetail}</span>
                    </ButtonBig> : ""
                }
            </div>
        </div>
    </React.Fragment>
}
export default Excursion;
