import React from 'react';
import  styles from './MarkerGoogle.module.css';
import marker from '../../../images/location.svg';

const MarkerGoogle = () => {
    return <React.Fragment>
            <img className={styles.marker} src={marker} style={{width: '30px', height: '41px'}} alt=""/>
    </React.Fragment>
};

export default MarkerGoogle;
