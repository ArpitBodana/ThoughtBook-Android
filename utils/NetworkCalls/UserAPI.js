import axios from "axios"

export const userLoginHandler = (username, password) => {
    return axios.post("https://chikubodana.pythonanywhere.com/api/login/", { username, password })
}

export const changeMyPassword = (oldPwd, newPwd, token) => {
    return axios.put('https://chikubodana.pythonanywhere.com/api/change-password/', { old_password: oldPwd, new_password: newPwd }, { headers: { 'Authorization': `Token ${token}` } })
}

export const userSignUp = (username, password, email) => {
    return axios.post('https://chikubodana.pythonanywhere.com/api/v1/register/', { username: username, password: password, email: email })
}