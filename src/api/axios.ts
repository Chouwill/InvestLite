import axios from "axios";


const apiClient  = axios.create({
    baseURL: "/",
    timeout: 10000,
})

console.log(apiClient);




export default apiClient