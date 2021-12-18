import axios from "axios";

export const getCurrency = () => {
    return  axios.get('https://v6.exchangerate-api.com/v6/64a555b8dad072f2a6210923/latest/ILS');
}
