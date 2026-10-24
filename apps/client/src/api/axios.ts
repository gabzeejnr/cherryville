import axios from "axios";

const api = axios.create({
    baseURL: "https://cherryville.onrender.com/api"
});

export default api;