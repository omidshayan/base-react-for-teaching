import axios from "axios";



const apiRequests = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
    }
})

export default apiRequests