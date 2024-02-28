import axios from "axios"

export const userLoginHandler = (username,password)=>{
    console.log("api called");
    return axios.post("https://chikubodana.pythonanywhere.com/api/login/",{username,password})
}