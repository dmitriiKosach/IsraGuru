import React from 'react';
import styles from './FilterLocation.module.css';
import store from "../../../../store/store";
import {updateCurrentLocationIndex} from "../../../../actions/languageAction";
import {updateFilter} from "../../../../actions/filterAction";
import {Modal} from "../../modal/Modal";

const FilterLocation = ({lang, locationCurrent, showingPosition, onToggleWindows}) => {

    const getIndexLocation = (name) => {
        let index = 0;
        for (let i = 0; i < lang.locations.length; i++){
            if(lang.locations[i].location === name){
                index = i;
            }
        }
        return index;
    }

    const onChangePosition = (event) => {
        event.preventDefault();
        let index = getIndexLocation(event.target.value)
        store.dispatch(updateCurrentLocationIndex(index));
        store.dispatch(updateFilter('city', event.target.name))
    }

    return <React.Fragment>
        <div className={styles.input_wrapper}>
            <label className={styles.label}>{lang.location}</label>
            <button onClick={onToggleWindows} name = "position" className={styles.input_position}>
                {locationCurrent.location}
            </button>
            {showingPosition === true ?
                <Modal>
                    <div className={styles.modal_helper} style={{left: '760px'}}/>
                    <div className={styles.modal_left} style={{width: '660px'}}>
                        <div className={styles.modal_left_title}>
                            <span style={{left: '442px'}}>{lang.titleModalLocation}</span>
                        </div>
                    </div>
                    <div className={styles.modal_center} style={{width: '200px'}}>
                        <div className={styles.modal_center_options}>
                            {lang.locations.map(location => {
                                return <button key={location.location} style={locationCurrent.location === location.location?{backgroundColor: '#EBDFCD', color: '#2B2D2F'}:null } onClick={onChangePosition} type='button' name={location.location} value={location.location}>{location.location}</button>
                            })}
                        </div>
                    </div>
                    <div className={styles.modal_right} style={{width: '416px'}}>
                        <div className={styles.modal_right_content}>
                        <span className={styles.modal_right_content_title}>
                            {locationCurrent.title}
                        </span>
                            <br/>
                            <span className={styles.modal_right_content_subtitle}>
                            {locationCurrent.subtitle}
                        </span>
                        </div>
                    </div>
                </Modal> : ""}
        </div>
    </React.Fragment>
}

export default FilterLocation;
