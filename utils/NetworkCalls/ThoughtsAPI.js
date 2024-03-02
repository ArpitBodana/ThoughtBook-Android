import axios from 'axios'

export const getAllThoughts = () => {
    return axios.get("https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/")
}

export const addThought = (thought, author, user, token) => {
    console.log(thought, author, user, token);
    return axios.post("https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/", { thought: thought, author: author, user: user }, { headers: { 'Authorization': `Token ${token}` } });
}

export const editThought = (id, thought, author, user, token) => {
    return axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { thought: thought, author: author, user: user }, { headers: { 'Authorization': `Token ${token}` } });
}

export const deleteThought = (id, token) => {
    return axios.delete(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`, { headers: { 'Authorization': `Token ${token}` } })
}