import axios from "axios";
const api = axios.create({
    baseURL: 'https://pddjzwcaf4.execute-api.ap-south-1.amazonaws.com/dev/api/v1',
    withCredentials: true,
     // Ensure cookies are sent
});
export default api;
