import React from 'react';
import styles from './FilterDate.module.css';
import MyCalendar from "../../myCalendar/MyCalendar";
import {Modal} from "../../modal/Modal";

const FilterDate = ({from, to, onFilteringState, lang, showingDate, onToggleWindows}) => {

    const onChangeDate = (date) =>{
        if(date.from !== null && date.from !== undefined ){
            const from  = date.from.toLocaleDateString();
            onFilteringState('dateFrom', from)
        }
        if(date.to !== null && date.to !== undefined){
            const to = date.to.toLocaleDateString();
            onFilteringState('dateTo', to);
        }
    }

    return <React.Fragment>
        <div className={styles.input_wrapper}>
            <label className={styles.label}>{lang.date}</label>
            <div className={styles.input_date}>
                <button onClick={onToggleWindows} name="date" className={styles.date}>
                    {from !== ""
                        ? lang.months[new Date(from).getMonth()] + " " + new Date(from).getDate()
                        : 'mm dd'
                    }
                </button>
                <button onClick={onToggleWindows} name="date" className={styles.date}>
                    {to !== ""
                        ? lang.months[new Date(to).getMonth()] + " " + new Date(to).getDate()
                        : "mm dd"
                    }
                </button>
            </div>

            {showingDate === true ?
                <Modal style={{background: 'black'}}>
                    <div className={styles.modal_helper} style={{left: '539px'}}/>
                    <div className={styles.modal_inner}>
                        <MyCalendar updateDateFilter={onChangeDate}/>
                    </div>
                </Modal> : ""
            }
        </div>
    </React.Fragment>
}

export default FilterDate;
