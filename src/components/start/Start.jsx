import React from 'react';
import styles from './Start.module.css';
import {useHistory} from "react-router-dom";
import {PATH_LIST_EVENTS} from "../../config/config_navigation";
import {TITLE_NAME} from "../../config/config_start";
import {useSelector} from "react-redux";
import { ButtonBig } from '../styles/ButtonBigStyles';
import {useCurrent} from "../current/CurrentProvider";

const Start = () => {
    const history = useHistory();
    const {updateIsTourist} = useCurrent();
    const lang = useSelector(state => state.language.lang.languageInterface);

    return <React.Fragment>
        <div className={styles.container}>
            <div className={styles.start_wrapper}>
                <span className={styles.start_title}>{TITLE_NAME}</span>
                <span className={styles.start_subtitle}>{lang.subtitleName}</span>
            </div>
            <ButtonBig onClick={() => {
                updateIsTourist(true);
                history.push(PATH_LIST_EVENTS);
            }} isAnimate="true">
                <span>{lang.buttonNameTourist}</span>
            </ButtonBig>

            <ButtonBig onClick={() => {
                updateIsTourist(false);
                history.push(PATH_LIST_EVENTS);
            }} isAnimate="true">
                <span>{lang.buttonNameGuide}</span>
            </ButtonBig>


        </div>

    </React.Fragment>
}

export default Start;
