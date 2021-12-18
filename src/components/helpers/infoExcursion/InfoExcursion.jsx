import React, {useEffect, useState} from "react";
import styles from './InfoExcursion.module.css';
import location from "../../../images/location.svg";
import clock from "../../../images/clock.svg";
import shekel from "../../../images/shekel.png";
import group from "../../../images/group.svg";
import {useSelector} from "react-redux";
import {getCurrency} from "../../../services/currencyService";

const InfoExcursion = (props) => {
    let date = new Date(props.date);
    const [currencyPrice, setCurrencyPrice] = useState(0);
    const lang = useSelector(state => state.language.lang);

    let time = Number.parseInt(props.end).toFixed(0)-Number.parseInt(props.start).toFixed(0);

    useEffect(()=> {
        getCurrency()
            .then((response) => {
                let price = +response.data.conversion_rates.USD * props.price;
                setCurrencyPrice(+price.toFixed(0));
            })
    }, [props.price])

    return <React.Fragment>
        <div className={styles.info_excursion_wrapper}>
            <div className={styles.info_excursion_left}>
                <div className={styles.info_helper}/>
                <span className={styles.info_excursion_date}>{('0' + date.getDate()).slice(-2)}</span>
                <span className={styles.info_excursion_month}>{lang.monthsFull[date.getMonth()]}</span>
                <span className={styles.info_excursion_week}>{lang.weeksShot[date.getDay()]}</span>
            </div>
            <div className={styles.info_excursion_center}>
                <div className={styles.info_excursion_location}>
                    <img src={location} alt=""/>
                    <span>{props.location}</span>
                </div>
                <div className={styles.info_excursion_time}>
                    <img src={clock} alt=""/>
                    <div>
                        <span className={styles.info_excursion_clock}>{props.start + " - " + props.end }</span>
                        <span className={styles.info_excursion_clock_subtitle}>{" (" + time + " " + lang.excursionTotalClock + ")"}</span>
                    </div>
                </div>
            </div>
            <div className={styles.info_excursion_right}>
                <div className={styles.info_excursion_price}>
                    <img src={shekel} alt=""/>
                    <div>
                        <span className={styles.info_excursion_price_shekel}>{props.price }</span>
                        <span className={styles.info_excursion_price_shekel_subtitle}>{"(≈$" + currencyPrice + ")"}</span>
                    </div>
                </div>
                <div className={styles.info_excursion_quantity}>
                    <img src={group} alt=""/>
                    <div>
                        <span className={styles.info_excursion_quantity_title}>{lang.excursionQuantityTitle + " "}</span>
                        <span className={styles.info_excursion_quantity_count}>{props.quantity}</span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default InfoExcursion;
