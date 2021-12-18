import React from "react";
import styles from './DateEvent.module.css'


const DateEvent = (props) => {

    return <React.Fragment>
        <div className={styles.date_item_inner}>
            <div className={styles.date_item_day}>{props.day}</div>
        </div>
        <div className={styles.date_items}>
            <div className={styles.date_item_months}>{props.month.toLowerCase()}</div>
            <div className={styles.date_item_border}/>
            <div className={styles.date_item_week}>{props.week}</div>
        </div>
    </React.Fragment>
}
export default DateEvent;