import React, { useState, useRef } from 'react';
import { useStateContext } from '../../context/state';

const SearchBar = () => {
    const { 
        getArtist,
        getAuth, 
        getSongs,
        getArtistDiscogs,
        totalArtists
    } = useStateContext();

    //const allArtists = useRef(totalArtists);
    //const currentArtists = allArtists.current;

    const [currentSearch, changeCurrentSearch] = useState('');
    
    const updateSearchInput = (e: any) => {
        const searchValue = e.target.value;
        changeCurrentSearch(searchValue);
    }

    const submitSearch = () => {
        getAuth()
        .then(getArtist(currentSearch))
        //.then(currentArtists.length === 1 && getSongs())
        .then(getSongs())
        .then(getArtistDiscogs(currentSearch))
    }

    return (
        <div id="search_form" className="input-group">
            <form action="#">
                <input 
                    type="text"
                    placeholder="Search for something?!"
                    className="form-control" 
                    id="search" 
                    onChange={(e) => updateSearchInput(e)} />
                <span className="input-group-btn">
                    <button type="submit" id="submit" className="btn btn-default" onClick={submitSearch}>Search</button>
                </span>
            </form>		
        </div>
    );
}

export default SearchBar;