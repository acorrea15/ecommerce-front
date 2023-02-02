import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommerce-back-production.up.railway.app/",
});

export default instance;
