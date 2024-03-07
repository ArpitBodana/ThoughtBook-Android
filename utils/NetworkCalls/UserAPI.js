import axios from "axios"
import NetInfo from '@react-native-community/netinfo';
import { showToast } from "../Toast";

export const userLoginHandler = (username, password) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.post("https://chikubodana.pythonanywhere.com/api/login/", { username, password });
}

export const changePasswordHandler = (old_password, new_password, token) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.put(
        "https://chikubodana.pythonanywhere.com/api/change-password/",
        { old_password: old_password, new_password: new_password },
        {
            headers: {
                Authorization: `Token ${token}`,
                'User-Agent': 'thoughtbook'
            },

        },
    );
}

export const userSignUp = (username, password, email) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.post('https://chikubodana.pythonanywhere.com/api/v1/register/', { username, password, email });
}