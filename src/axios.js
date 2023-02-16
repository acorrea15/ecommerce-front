import axios from "axios";

 

const instance = axios.create({
    baseURL: "http://localhost:8080",
    /* baseURL: "https://ecommerce-back-production.up.railway.app/", */
    /* headers: {
        Authorization: `Bearer ${accessToken}`
    } */
});

export default instance;
