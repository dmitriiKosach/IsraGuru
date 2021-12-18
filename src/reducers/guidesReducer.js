import {GUIDES} from "../config/config_guides";

const initialState = {
    guides: GUIDES,
}

export const guidesReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_GUIDE":
            return state.push(action.payload);
        default:
            return state;
    }
}
