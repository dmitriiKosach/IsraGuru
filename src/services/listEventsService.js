import axios from "axios";
import {BASE_URL} from "../config/config_api";

export const getListEvents = (specified_request) => {
    return axios.get(BASE_URL + 'event/' + specified_request);
}
