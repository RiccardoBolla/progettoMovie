import {Movie, Movies } from "../models/Movie";

export const getMovies = () => {
    return fetch('https://www.omdbapi.com/?s=Batman&apikey=e6f567fa')
    .then(resp => resp.json())
    .then(movies => movies.map(movie => movieObjToModel(movie)));
};

export const movieObjToModel = movie => new Movie(movie.title, movie.year, movie.imdbID, movie.type, movie.poster);