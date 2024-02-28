import axios from 'axios'

export const getAllThoughts = () => {
    return axios.get("https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/")
}