import {
    ADD_GUIDE,
    CLEAR_GUIDE_CURRENT,
    DELETE_GUIDE,
    REGISTER_FAIL,
    SET_GUIDE_CURRENT,
    UPDATE_GUIDE
} from "./typesAction";
import authService from "../services/authService";
import {returnErrors} from "./errorAction";

export const addGuide = (guide) => (dispatch) => {
    return authService.registration(guide)
        .then(response => {
            dispatch({
                type: ADD_GUIDE,
                payload: guide
            })
        })
        .catch(error => {
            dispatch(returnErrors(error.message, error.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
            return Promise.reject();
        });
}

export const putGuide = (guide) => (dispatch) => {
    dispatch({
        type: UPDATE_GUIDE,
        payload: guide
    })
}

export const deleteGuide = (id) => (dispatch) => {
    dispatch({
        type: DELETE_GUIDE,
        payload: id
    })
}

export const setGuideCurrent = (guide) => (dispatch) => {
    dispatch({
        type: SET_GUIDE_CURRENT,
        payload: guide
    })
}

export const clearGuideCurrent = (guide) => (dispatch) => {
    dispatch({
        type: CLEAR_GUIDE_CURRENT,
        payload: guide
    })
}
