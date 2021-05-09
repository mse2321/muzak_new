import React, { useState } from 'react';
import { useStateContext } from '../../context/state';
import { Button, FormControl, InputGroup  } from 'react-bootstrap';
import _ from 'lodash';

const SearchBar = () => {
    const { 
        getArtist,
        getAuth, 
        setToggleMultipleSearchView
    } = useStateContext();

    const [currentSearch, changeCurrentSearch] = useState('');
    
    const updateSearchInput = (e: any) => {
        const searchValue = e.target.value;
        changeCurrentSearch(searchValue);
    }

    const submitSearch = () => {
        getAuth()
        .then(getArtist(currentSearch))
        
        setToggleMultipleSearchView(true);
    }

    return (
        <InputGroup id="search_form">
            <FormControl
                placeholder="Search for something?!"
                aria-label="SearchBar"
                aria-describedby="search"
                onChange={(e) => updateSearchInput(e)}
            />
            <InputGroup.Append>
                <Button type="submit" id="submit" onClick={submitSearch}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SearchBar;

/*
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
*/