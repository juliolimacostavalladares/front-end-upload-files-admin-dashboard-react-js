import aixos from 'axios'

const api = aixos.create({
    baseURL: 'http://localhost:3333/'
});

export default api;