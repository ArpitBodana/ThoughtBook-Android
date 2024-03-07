import axios from 'axios'
import NetInfo from '@react-native-community/netinfo';
import { showToast } from "../Toast";

export const getAllThoughts = () => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.get("https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/")
}

export const addThought = (thought, author, user, token) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.post("https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/", { thought: thought, author: author, user: user }, { headers: { 'Authorization': `Token ${token}` } });
}

export const editThought = (id, thought, author, user, token) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { thought: thought, author: author, user: user }, { headers: { 'Authorization': `Token ${token}` } });
}

export const deleteThought = (id, token) => {
    NetInfo.fetch().then(state => {
        if(!state.isConnected){
            showToast("Please check your internet connection.")
            return
        }
      });
    return axios.delete(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { headers: { 'Authorization': `Token ${token}` } })
}