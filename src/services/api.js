import aixos from 'axios'

const api = aixos.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default api;