import React from "react";

const MovieList = (props) => {
    return (
        <div className="">
            {props.movies.map((movie, index) => (
                <div className="d-inline m-3 justify-content-start">
                    <img src={movie.Poster} alt='movie'></img>
                </div>
            ))}
        </div>
    );
};

export default MovieList;