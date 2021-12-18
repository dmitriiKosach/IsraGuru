import {
    UPDATE_CURRENT_LEVEL,
    UPDATE_CURRENT_LEVEL_INDEX,
    UPDATE_CURRENT_LOCATION, UPDATE_CURRENT_LOCATION_INDEX,
    UPDATE_LANGUAGE
} from "./typesAction";

export const updateLanguage = (language, indexLevel, indexLocal) => (dispatch) => {
    dispatch({
        type: UPDATE_LANGUAGE,
        payload: language
    });
    dispatch({
        type: UPDATE_CURRENT_LEVEL,
        payload: indexLevel
    });
    dispatch({
        type: UPDATE_CURRENT_LOCATION,
        payload: indexLocal
    })

}


export const updateCurrentLevelIndex = (index) => (dispatch)  => {
    dispatch({
        type: UPDATE_CURRENT_LEVEL_INDEX,
        payload: index
    });
    dispatch({
        type: UPDATE_CURRENT_LEVEL,
        payload: index
    });
}

export const updateLevelCurrent = (index) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_LEVEL,
        payload: index
    });
}

export const updateCurrentLocationIndex = (index) => (dispatch)  => {
    dispatch({
        type: UPDATE_CURRENT_LOCATION_INDEX,
        payload: index
    });
    dispatch({
        type: UPDATE_CURRENT_LOCATION,
        payload: index
    });
}

export const updateCurrentLocation = (index) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_LOCATION,
        payload: index
    })
}
