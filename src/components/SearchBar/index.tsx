"use client"
import React from 'react';
import { useStateContext } from '../../context/state';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../actions/actions';
import * as apis from '../../apis/Apis';

const SearchBar = () => {
    const { state, dispatch } = useStateContext();

    const updateSearchInput = (e: any) => {
        dispatch(actions.toggleErrorView(false));
        const searchValue = e.target.value;
        dispatch(actions.setSearchInput(searchValue));
    }

    const clearSearchInput = (e: any) => {
        dispatch(actions.toggleErrorView(false));
        dispatch(actions.setSearchInput(''));
        dispatch(actions.setSongs([]));
        dispatch(actions.setArtistDetails({}));
    }

    const submitSearch = () => {
        state.displayNoTracksMessage && dispatch(actions.toggleDisplayNoTracksMessage(false));
        apis.getArtist(state.searchInput, state, dispatch);
        dispatch(actions.toggleSearchResultsView(true));
    }

    return (
        <InputGroup id="search_form">
            <FormControl
                placeholder="Search for something?!"
                aria-label="SearchBar"
                aria-describedby="search"
                onChange={(e) => updateSearchInput(e)}
                value={state.searchInput}
            />
            {state.searchInput && ( 
                <Button className="clearButton" onClick={clearSearchInput}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            )}
            <Button type="submit" id="submit" onClick={submitSearch}>Search</Button>
        </InputGroup>
    );
}

export default SearchBar;