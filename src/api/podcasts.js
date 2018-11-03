import axios from 'axios'

export const getPodcasts = (page = 1) => {
    return axios.get(`http://podcast.test/podcasts?page=${page}`)
}