import {
    CLEAR_FILTER,
    UPDATE_EVENTS_BY_CITY,
    UPDATE_EVENTS_BY_DATE_FROM,
    UPDATE_EVENTS_BY_DATE_TO,
    UPDATE_EVENTS_BY_LEVEL, UPDATE_EVENTS_BY_SEARCH
} from "./typesAction";

export const updateFilter = (name, params) => (dispatch) => {
    switch (name){
        case 'difficultyLevel':
            dispatch({
                type: UPDATE_EVENTS_BY_LEVEL,
                payload: params
            });
            break;
        case 'city':
            dispatch({
                type: UPDATE_EVENTS_BY_CITY,
                payload: params
            });
            break;
        case 'dateFrom':
            dispatch({
                type: UPDATE_EVENTS_BY_DATE_FROM,
                payload: params
            });
            break;
        case 'dateTo':
            dispatch({
                type: UPDATE_EVENTS_BY_DATE_TO,
                payload: params
            });
            break;
        case 'search':
            dispatch({
                type: UPDATE_EVENTS_BY_SEARCH,
                payload: params
            });
            break;
        case 'reset':
            dispatch({
                type: CLEAR_FILTER
            });
            break;
        default:
            break;
    }

}







