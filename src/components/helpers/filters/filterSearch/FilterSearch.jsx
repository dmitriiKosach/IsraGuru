import React from 'react';
import styles from "./FilterSearch.module.css";
import search_img from "../../../../images/loupe.svg";
import store from "../../../../store/store";
import {updateFilter} from "../../../../actions/filterAction";

const FilterSearch = ({lang}) => {

    const onChangeSearch = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        store.dispatch(updateFilter(name,  value))
    }

    return <React.Fragment>
        <div className={styles.input_wrapper} >
            <label className={styles.label}>{lang.search}</label>
            <div className={styles.input_inner}>
                <img className={styles.icon_search} src={search_img} alt=""/>
                <input onChange={onChangeSearch} className={styles.input_search} type='text' name='search' placeholder={lang.searchPlaceholder}/>
            </div>
        </div>
    </React.Fragment>
}

export default FilterSearch;
