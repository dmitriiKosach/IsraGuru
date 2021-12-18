import React from "react";
import styles from './ExcursionSmall.module.css'
import DateEvent from "../dateEvent/DateEvent";
import {PATH_VIEW_EVENT} from "../../../config/config_navigation";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {useCurrent} from "../../current/CurrentProvider";

const ExcursionSmall = (props) => {
    const lang = useSelector(state => state.language.lang);
    const buttonDetail = useSelector(state => state.language.lang.buttonDetail);
    const history = useHistory();
    const excursion = props.excursion;
    const {updateEvent} = useCurrent();
    let showButton = props.isShow;
    const date = new Date(excursion.date);

    const showViewEvent = (excursion) => {
        updateEvent(excursion)
        history.push(PATH_VIEW_EVENT);
    }

    return <React.Fragment>
        <div className={styles.excursion_small_item}>
            <div className={styles.excursion_small_item_content_left}>
                <div className={styles.excursion_small_item_title}>{excursion.title}</div>
                <div className={styles.excursion_small_item_subtitle}>{excursion.shortDescription}</div>
            </div>
            <div className={styles.excursion_small_item_content_right}>
                <div className={styles.excursion_small_item_content_date}>
                    <DateEvent month={lang.monthsFull[date.getMonth()]} week={lang.weeks[date.getDay()]} day={('0' + date.getDate()).slice(-2)}/>
                </div>
                {showButton === 'true' ?
                    <button onClick={() => showViewEvent(excursion)} className={styles.button_link}>
                        <span>{buttonDetail}</span>
                    </button> : ""
                }
            </div>
        </div>
    </React.Fragment>
}
export default ExcursionSmall;
