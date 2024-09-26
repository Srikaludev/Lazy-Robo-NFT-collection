import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2 search-container">
            <input 
                className="searchbar fs-normal pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search for your Fav RoboNFT" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;