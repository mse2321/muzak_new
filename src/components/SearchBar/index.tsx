import React, { useState } from 'react';
import { useStateContext } from '../../context/state';
import { Button, FormControl, InputGroup  } from 'react-bootstrap';
import _ from 'lodash';

const SearchBar = () => {
    const { 
        getArtist,
        setToggleSearchResultsView,
        setDisplayNoTracksMessage,
        displayNoTracksMessage,
        setShowErrorView
    } = useStateContext();

    const [currentSearch, changeCurrentSearch] = useState<String>('');
    
    const updateSearchInput = (e: any) => {
        setShowErrorView(false);
        const searchValue = e.target.value;
        changeCurrentSearch(searchValue);
    }

    const submitSearch = () => {
        displayNoTracksMessage && setDisplayNoTracksMessage(false);
        getArtist(currentSearch);
        setToggleSearchResultsView(true);
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