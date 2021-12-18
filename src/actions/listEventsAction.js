import {getListEvents} from "../services/listEventsService";
import {
    CLEAR_EVENT_CURRENT,
    SET_EVENT_CURRENT,
    UPDATE_EVENTS_BY_SPECIFIED_REQUEST
} from "./typesAction";
import {EXCURSIONS} from "../config/config_list_events";

export const updateEventsList = (params) => (dispatch) => {
    getListEvents(params)
        .then(response => {
            dispatch({
                type: UPDATE_EVENTS_BY_SPECIFIED_REQUEST,
                payload: EXCURSIONS
            });
            return Promise.reject();
        })
        .catch(error => "")
}

export const setEventCurrent = (event) => (dispatch) => {
    dispatch({
        type: SET_EVENT_CURRENT,
        payload: event
    })
}

export const clearEventCurrent = (event) => (dispatch) => {
    dispatch({
        type: CLEAR_EVENT_CURRENT,
        payload: event
    })
}




