import axios from 'axios';

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

axios.defaults.baseURL = REACT_APP_BASE_URL

export async function fetchData (url) {
    const fetch = await axios.get(url)
    return fetch.data.results
}

export async function fetchGender (url) {
  const fetch = await axios.get(url)
  return fetch.data.genres
}

export async function fetchFilmById (url) {
  const fetch = await axios.get(url)
  return fetch.data
}