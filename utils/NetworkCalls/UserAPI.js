import axios from "axios"

export const userLoginHandler = (username,password)=>{
    return axios.post("https://chikubodana.pythonanywhere.com/api/login/",{username,password})
}