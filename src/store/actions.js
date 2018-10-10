import axios from 'axios';

const API_URL = 'https://swapi.co/api/';

const API_GET_VEHICLES = () => axios.get(`${API_URL}vehicles`)
    .then((response) => response.data)
    .then((response) => {
        if ('results' in response) {
            console.log(response);
            return response.results;
        }
        return Promise.reject(response);
    })

export default { API_GET_VEHICLES };