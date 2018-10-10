import axios from 'axios';

const API_URL = 'https://swapi.co/api/';

export const API_GET_VEHICLES = (context) => axios.get(`${API_URL}vehicles`)
    .then((response) => response.data)
    .then((response) => {
        if ('results' in response) {
            context.commit('ITEMS_UPDATE_VEHICLES', response.results);
            return response;
        }
        return Promise.reject(response);
    })

export const API_POST_ORDER = (context, payload) => axios.post(`${API_URL}vehicles`, payload)
    .then(() => {
        // console.log(response);
    });