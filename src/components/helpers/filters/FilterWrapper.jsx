import React, {useEffect, useState} from "react";
import styles from './FilterWrapper.module.css';
import {useSelector} from "react-redux";
import store from "../../../store/store";
import {
    updateCurrentLevelIndex,
    updateCurrentLocationIndex
} from "../../../actions/languageAction";
import {updateFilter} from "../../../actions/filterAction";
import {updateEventsList} from "../../../actions/listEventsAction";
import FilterDate from "./filterDate/FilterDate";
import FilterLevel from "./filterLevel/FilterLevel";
import FilterLocation from "./filterLocation/FilterLocation";
import FilterLanguage from "./filterLanguage/FilterLanguage";
import FilterSearch from "./filterSearch/FilterSearch";

const FilterWrapper = ({filter}) => {
    const state = useSelector(state => state);
    const lang = useSelector(state => state.language.lang);

    //state by parameters
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    //only used for style button
    const [showingLevel, setShowingLevel] = useState(false);
    const [showingPosition, setShowingPosition] = useState(false);
    const [showingDate, setShowingDate] = useState(false);

    const onToggleWindows = (event) => {
        switch (event.target.name){
            case 'level':
                if(showingLevel === true){
                    setShowingLevel(!showingLevel);
                    setShowingPosition(false);
                    setShowingDate(false);
                }
                if(showingLevel === false){
                    setShowingLevel(!showingLevel);
                    setShowingPosition(false);
                    setShowingDate(false);
                }
                break;
            case 'position':
                if(showingPosition === true){
                    setShowingLevel(false);
                    setShowingDate(false);
                    setShowingPosition(!showingPosition);
                }
                if(showingPosition === false){
                    setShowingLevel(false);
                    setShowingDate(false);
                    setShowingPosition(!showingPosition);
                }
                break;
            case 'date':
                if(showingDate === true){
                    setShowingLevel(false);
                    setShowingPosition(false);
                    setShowingDate(!showingDate)
                }
                if(showingDate === false){
                    setShowingLevel(false);
                    setShowingPosition(false);
                    setShowingDate(!showingDate);
                }
                break;
            default:
                setShowingLevel(false);
                setShowingPosition(false);
                setShowingDate(false);
                break;
        }
    }

    const updateFilteringState = (name, param) => {
        switch (name){
            case 'dateFrom':
                setDateFrom(param);
                break;
            case 'dateTo':
                setDateTo(param);
                break;
            default:
                break;
        }
        store.dispatch(updateFilter(name,  param))
    }

    const resetFilter = () => {
        store.dispatch(updateFilter('reset'));
        store.dispatch(updateCurrentLevelIndex(0));
        store.dispatch(updateCurrentLocationIndex(0));
    }

    useEffect(()=> {
        store.dispatch(updateEventsList(filter));
    },[filter])

    return <React.Fragment>
        <div className={styles.filter_wrapper}>
            <FilterSearch lang={lang}/>
            <FilterDate onFilteringState={updateFilteringState} from={dateFrom} to={dateTo} showingDate={showingDate} lang={lang} onToggleWindows={onToggleWindows}/>
            <FilterLocation lang={lang} locationCurrent={state.language.locationCurrent} showingPosition={showingPosition} onToggleWindows={onToggleWindows}/>
            <FilterLevel lang={lang} levelCurrent={state.language.levelCurrent} onToggleWindows={onToggleWindows} showingLevel={showingLevel}/>
            <FilterLanguage lang={lang} levelCurrentIndex={state.language.levelCurrentIndex} locationCurrentIndex={state.language.locationCurrentIndex} resetFilter={resetFilter} languageButtons={state.language.languageButtons} />
        </div>
    </React.Fragment>
}

export default FilterWrapper;
