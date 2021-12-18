import React from "react";
import styles from './GuideIconButton.module.css'
import {useSelector} from "react-redux";

const GuideIconButton = (props) => {
    const nameLabel = useSelector(state => state.language.lang.profileNameLabel);
    return <React.Fragment>
        {   props.isCurrentUser === "true" ? "" : <div className={styles.profile_name_label}>{nameLabel}</div>}
            <div className={styles.profile_name} style={props.isCurrentUser === "true" ? {top: "18px"} : {top: "22px"}}>{props.firstName + " " + props.lastName}</div>
            <div className={styles.profile_avatar} style={{backgroundImage: `url(${props.image})`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
    </React.Fragment>
}
export default GuideIconButton;
