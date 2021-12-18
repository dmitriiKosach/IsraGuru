import React, {useState} from 'react';
import styles from './FilterLanguage.module.css';
import store from "../../../../store/store";
import {updateCurrentLevelIndex, updateCurrentLocationIndex, updateLanguage} from "../../../../actions/languageAction";

const FilterLanguage = ({lang, levelCurrentIndex, locationCurrentIndex, resetFilter, languageButtons }) => {
    const [languageButton, setLanguageButton] = useState(lang.title);

    const onChangeLanguage = (event) => {
        event.preventDefault();
        setLanguageButton(event.target.value);
        store.dispatch(updateLanguage(event.target.value));
        store.dispatch(updateCurrentLevelIndex(levelCurrentIndex));
        store.dispatch(updateCurrentLocationIndex(locationCurrentIndex));
    }
    return <React.Fragment>
        <div className={styles.input_wrapper}>
            <label className={styles.label}>{lang.language}</label>
            <div className={styles.buttons_language} >
                <button key="All" onClick={resetFilter} type='button' value="">All</button>
                {languageButtons.map(language => {
                    return <button key={language} onClick={onChangeLanguage} style={language===languageButton?{backgroundColor: '#EBDFCD', color: '#2B2D2F'}:null } type='button' value={language}>{language}</button>
                })}
            </div>
        </div>
    </React.Fragment>
}

export default FilterLanguage;
