import React from 'react';
import styles from './FilterLevel.module.css';
import store from "../../../../store/store";
import {updateCurrentLevelIndex} from "../../../../actions/languageAction";
import {updateFilter} from "../../../../actions/filterAction";
import {Modal} from "../../modal/Modal";

const FilterLevel = ({lang, levelCurrent, showingLevel, onToggleWindows}) => {

    const getIndexLevel = (name) => {
        let index = 0;
        for (let i = 0; i < lang.levels.length; i++){
            if(lang.levels[i].level === name){
                index = i;
            }
        }
        return index;
    }

    const onChangeLevel = (event) => {
        event.preventDefault();
        let index = getIndexLevel(event.target.value);
        store.dispatch(updateCurrentLevelIndex(index));
        store.dispatch(updateFilter('difficultyLevel',  index))
    }
    return <React.Fragment>
        <div className={styles.input_wrapper}>
            <label className={styles.label}>{lang.level}</label>
            <button onClick={onToggleWindows} name = "level" className={styles.input_level} >
                {levelCurrent.level}
            </button>
            {showingLevel === true ?
                <Modal>
                    <div className={styles.modal_helper} style={{left: '960px'}}/>
                    <div className={styles.modal_left} style={{width: '860px'}}>
                        <div className={styles.modal_left_title}>
                            <span style={{left: '688px'}}>{lang.titleModalLevel}</span>
                        </div>
                    </div>
                    <div className={styles.modal_right}>
                        <div className={styles.modal_right_options}>
                            {lang.levels.map(level => {
                                return <button key={level.level} style={levelCurrent.level === level.level?{backgroundColor: '#EBDFCD', color: '#2B2D2F'}:null } onClick={onChangeLevel} type='button' name={level.name} value={level.level}>{level.level + level.comment}</button>
                            })}
                        </div>
                    </div>
                </Modal> : ''}
        </div>
    </React.Fragment>
}

export default FilterLevel;
