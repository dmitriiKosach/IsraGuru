import {combineReducers} from "redux";
import {languagesReducer} from "./languageReducer";
import {filterReducer} from "./filterReducer";
import {errorsReducer} from "./errorsReducer";
import {authReducer} from "./authReducer";
import {guidesReducer} from "./guidesReducer";


export default combineReducers({
    language: languagesReducer,
    filter: filterReducer,
    auth: authReducer,
    errors: errorsReducer,
    guides: guidesReducer

});
