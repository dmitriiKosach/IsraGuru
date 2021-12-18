import axios from "axios";
import {BASE_URL} from "../config/config_api";

function getUser (config) {
    return axios.get(BASE_URL + 'guide/:id', config);
}

function signUp (data) {
    return false;
}

function signIn (data, token) {
    return axios.post(BASE_URL + 'guide/:' + data.username, data, {
        headers: {
            'Authorization': `Basic ${token}`
        },
    })
}

function signOut () {
    localStorage.removeItem("token");
}

export default {signIn, signUp, signOut, getUser};
