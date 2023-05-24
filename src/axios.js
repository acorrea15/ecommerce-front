<<<<<<< HEAD
import axios from "axios";

 

const instance = axios.create({
    baseURL: "http://localhost:8080",
    /* baseURL: "https://ecommerce-back-production.up.railway.app/", */
    /* headers: {
        Authorization: `Bearer ${accessToken}`
    } */
});

export default instance;
=======
import axios from "axios";

 

const instance = axios.create({
    /* baseURL: "http://localhost:8080", */
    baseURL: "https://ecommerce-back-production.up.railway.app/",
    /* headers: {
        Authorization: `Bearer ${accessToken}`
    } */
});

export default instance;
>>>>>>> 7c5ae387e12c5c8122c0342b7a69da2dac1bcb19
