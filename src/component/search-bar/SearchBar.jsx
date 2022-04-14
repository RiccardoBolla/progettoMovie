import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="col col-sm-4">
            <input             
            className="form-control"
            onChange={(e) => props.setSearchMovies(e.target.value)}
            placeholder='Search your Movie...' 
            type="text"
            value={props.value}
            />
        </div>
    )
}

export default SearchBar;