import {clearErrors, returnErrors} from "./errorAction";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT_SUCCESS,
    USER_LOADED
} from "./typesAction";
import store from "../store/store";
import authService from "../services/authService";



// export const loadUser = (token) => (dispatch) => {
//     dispatch({type: USER_LOADING});
//
//     const config = {
//         headers: {
//             'Authorization': `Basic ${token}`
//         }
//     }
//     if(token){
//         config.headers['x-auth-token'] = token;
//     }
//     authService.getUser(config)
//         .then(response => {
//             // const token = ((response.config.headers.Authorization).split(" "))[1];
//             localStorage.setItem('token', token);
//             const users = store.getState().guides.guides;
//             const user = users.find(user => {
//                 console.log(token)
//                 console.log(user.email)
//                 return token === user.email;
//             })
//             dispatch(clearErrors());
//             dispatch({
//                 type: USER_LOADED,
//                 payload: user
//             });
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.message, ""));
//             dispatch({
//                 type: AUTH_ERROR
//             })
//         });
// }
//
//
// export const registration = (data) => (dispatch) => {
//     return authService.signUp(data)
//         .then(response => {
//             dispatch(clearErrors());
//             dispatch({
//                 type: REGISTER_SUCCESS,
//             });
//             dispatch({
//                 type: ADD_GUIDE,
//                 payload: data
//             })
//         })
//         .catch(error => {
//             dispatch(returnErrors(error.message, error.response.status));
//             dispatch({
//                 type: REGISTER_FAIL
//             });
//             return Promise.reject();
//         });
// }
//
export const login = (data) => (dispatch) => {
    const token = Buffer.from(`${data.username}:${data.password}`, 'utf8').toString('base64')
    return authService.signIn(data, token)
        .then(response => {
            console.log("then")
            dispatch({
                type: LOGIN_SUCCESS,
            })
            // const token = ((response.config.headers.Authorization).split(" "))[1];
            localStorage.setItem('token', data.username);
            const users = store.getState().guides.guides;
            const user = users.find(user => {
                return data.username === user.email;
            })
            dispatch(clearErrors());
            dispatch({
                type: USER_LOADED,
                payload: user
            });
        })
        .catch(error => {
            console.log("catch")
            dispatch(returnErrors(error.message, ""));
            dispatch({
                type: LOGIN_FAIL
            })
            return Promise.reject();
        });

 };


export const logout = () => (dispatch) => {
    authService.signOut();
    dispatch({
        type: LOGOUT_SUCCESS
    });
};
