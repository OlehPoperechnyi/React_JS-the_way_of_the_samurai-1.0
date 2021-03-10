import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';


let initialState =
    {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isFetching: false,
        captchaUrl: ''
    };
//Thunks
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        dispatch(setUserData(response.data.id, response.data.email, response.data.login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "some error!"
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        console.log('success!!!');
        dispatch(setUserData(null, null, null, false));
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await authAPI.getCaptcha();
    if (response.resultCode === 0) {
        dispatch(setCaptcha(response.url));
    }

}


//Dispatches
export const setCaptcha = (url) => ({type: SET_CAPTCHA, captchaUrl: url});
export const setUserData = (id, email = null, login = null, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
    }
};


export default authReducer;