import { REQUEST_USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "./authTypes"


export const requestUserLogin = () =>{
    return {
        type:REQUEST_USER_LOGIN
    }
}

export const userLoginSuccess = (token) =>{
    return {
        type:USER_LOGIN_SUCCESS,
        payload:token
    }
}

export const userLoginFail = () =>{
    return {
        type:USER_LOGIN_FAIL
    }
}