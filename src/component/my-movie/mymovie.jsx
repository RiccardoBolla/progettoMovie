import React, { useEffect, useState } from "react";

import MovieList from "../movie-list/MovieList";
import Header from '../header/Header';
import SearchBar from '../search-bar/SearchBar';

const MyMovie = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState('');
   

    const getMovieRequest = async (searchMovies) => {
      const url = `https://www.omdbapi.com/?s=${searchMovies}&apikey=e6f567fa`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([])
      }
      
    };

    useEffect(() => {
      getMovieRequest(searchMovies);
    }, [searchMovies]);


    return (
        <div className='container-fluid movie-app'>
          <div className='row d-flex align-items-center mt-4 mb-4'>          
            <Header heading="Movies" />
            <SearchBar searchMovies={searchMovies} setSearchMovies={setSearchMovies} />          
          </div>
          
          <div className='row'>          
            <MovieList  movies={movies} />          
          </div>
          
        </div>
    );
    
};

export default MyMovie;