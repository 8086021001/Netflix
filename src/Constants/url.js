import { API_KEY,baseURL } from "./Constants";


// trending: https://api.themoviedb.org/3/movie/top_rated?api_key=f7cb83431cf124d08f611e8aa158a2b0&language=en-US&page=1
// latest : https://api.themoviedb.org/3/movie/latest?api_key=f7cb83431cf124d08f611e8aa158a2b0&language=en-US

// https://api.themoviedb.org/3/movie/now_playing?api_key=f7cb83431cf124d08f611e8aa158a2b0&language=en-US&page=1
// https://api.themoviedb.org/3/movie/upcoming?api_key=f7cb83431cf124d08f611e8aa158a2b0&language=en-US&page=1

// https://api.themoviedb.org/3/movie/popular?api_key=f7cb83431cf124d08f611e8aa158a2b0&language=en-US&page=1


export const now_playing = baseURL+`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

export const top_rated = baseURL +`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

export const upcoming = baseURL +`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

export const popular = baseURL +`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`