import { REQUEST_USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "./authTypes"


const initialAuthState = {
    isAuthenticated: false,
    authToken: "",
    loading: false,
    errorMsg:""
}

 const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case REQUEST_USER_LOGIN: return {
            ...state,
            loading: true,
            isAuthenticated: false,
            authToken: "",
            errorMsg:""
        }
        case USER_LOGIN_FAIL: return {
            ...state,
            loading: false,
            errorMsg:"Invalid Credentials !!"
        }
        case USER_LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            isAuthenticated: true,
            authToken: action.payload,
            errorMsg:""
        }
        default: return state
    }
}

export default authReducer