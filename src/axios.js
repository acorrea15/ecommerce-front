import axios from "axios";

const instance = axios.create({
    /* baseURL: "http://localhost:808 0", */
    baseURL: "https://ecommerce-back-production.up.railway.app/",
});

export default instance;
