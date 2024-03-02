import { LOG_ME_OUT, REQUEST_USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "./authTypes"


export const requestUserLogin = () => {
    return {
        type: REQUEST_USER_LOGIN
    }
}

export const userLoginSuccess = (token, user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: { token, user }
    }
}

export const userLoginFail = () => {
    return {
        type: USER_LOGIN_FAIL
    }
}

export const logMeOut = () => {
    return {
        type: LOG_ME_OUT
    }
}