import axios from 'axios'

export const getPodcasts = (page = 1) => {
    return axios.get(`https://enigmatic-anchorage-84107.herokuapp.com/podcasts?page=${page}`)
}

export const getPodcast = (id) => {
    return axios.get(`https://enigmatic-anchorage-84107.herokuapp.com/podcasts/${id}`)
}
