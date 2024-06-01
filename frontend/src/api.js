import axios from "axios"
axios.defaults.withCredentials = true;

// API REQUESTS FOR TASKS

const TaskUrl = "http://localhost:3000/api/Task"

export const getTask = async (id) => {
    id = id || ''
    return await axios.get(`${TaskUrl}/${id}`)
}

export const addTask = async (Task) => {
    return await axios.post(`${TaskUrl}`, Task)
}

export const editTask = async (id, Task) => {
    return await axios.patch(`${TaskUrl}/${id}`, Task)
}
