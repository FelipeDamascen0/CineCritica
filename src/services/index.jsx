import axios from "axios"

const API_KEY = '769b0eb2ecaa9ef5b9707f80f43c6c63'
const BASE_API = 'https://api.themoviedb.org/3'

export const Api = {
  getHomeList: async (page) => {
    return [
      {
        id: 1,
        slug: 'trending',
        title: 'Populares',
        back_drop: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
        items: await axios.get(`${BASE_API}/trending/all/week?language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 2,
        slug: 'top rated',
        title: 'Em Alta',
        back_drop: '/26uCzg0yigXqjcM9dCGCDihoXLM.jpg',
        items: await axios.get(`${BASE_API}/movie/top_rated?with_genres=28&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 3,
        slug: 'action',
        title: 'Ação',
        back_drop: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 4,
        slug: 'animation',
        title: 'Animação',
        back_drop: '/AqhA7GXDEaP1spOWih195YzSPem.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=16&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 5,
        slug: 'adventure',
        title: 'Aventura',
        back_drop: '/2rVkDZFLN6DI5PAoraoe9m4IRMN.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=12&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 6,
        slug: 'comedy',
        title: 'Comedia',
        back_drop: '/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 7,
        slug: 'horror',
        title: 'Terror',
        back_drop: '/44immBwzhDVyjn87b3x3l9mlhAD.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 8,
        slug: 'romance',
        title: 'Romance',
        back_drop: '/pbMbDlOAkVuvnxovBA2ENin59xH.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },

      {
        id: 9,
        slug: 'documentary',
        title: 'Documentario',
        back_drop: '/8rft8A9nH43IReybFtYt21ezfMK.jpg',
        items: await axios.get(`${BASE_API}/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}&page=${page}`)
      },
    ]
  }
}


