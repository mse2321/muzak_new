"use client"
import React, { Suspense } from 'react';
import { useStateContext } from '../../context/state';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchResults from "../SearchResults/index";
import * as actions from '../../actions/actions';
import * as apis from '../../apis/Apis';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchBar = () => {
    const { state, dispatch } = useStateContext();

    const updateSearchInput = (e: any) => {
        dispatch(actions.toggleErrorView(false));
        const searchValue = e.target.value;
        dispatch(actions.toggleSearchResultsView(true));
        dispatch(actions.setSearchInput(searchValue));
        state.displayNoTracksMessage && dispatch(actions.toggleDisplayNoTracksMessage(false));
        apis.getArtist(state.searchInput, state, dispatch);
        dispatch(actions.toggleSearchResultsView(true));
    }

    const clearSearchInput = (e: any) => {
        dispatch(actions.toggleSidebar(false));
        dispatch(actions.toggleErrorView(false));
        dispatch(actions.toggleSearchResultsView(false));
        dispatch(actions.setSearchInput(''));
        dispatch(actions.setSongs([]));
        dispatch(actions.setArtistDetails({}));
    }

    const submitSearch = (artistName: string, artistId: string) => {
        dispatch(actions.setSearchInput(artistName));
        apis.getSongs(artistId, state, dispatch);
        apis.getArtistDiscogs(artistName, dispatch);
        dispatch(actions.togglePlayer(false));
        dispatch(actions.toggleSearchResultsView(false));
    }

    /*
        const toggleHandler = () => {
            !_.isEmpty(state.songs) && dispatch(actions.toggleSearchResults(true));
            dispatch(actions.toggleSearchResultsView(false));
        }

        const resetSearchInput = () => {
            dispatch(actions.setSearchInput(''));
            toggleHandler();
        }

        const submitSearch = (artistName: string, artistId: string) => {
            // clearing previous selections
            dispatch(actions.togglePlayer(false));

            apis.getSongs(artistId, state, dispatch);
            apis.getArtistDiscogs(artistName, dispatch);

            toggleHandler();
        }

            const toggleHandler = () => {
        !_.isEmpty(state.songs) && dispatch(actions.toggleSearchResults(true));
		dispatch(actions.toggleSearchResultsView(false));
	}

    const submitSearch = (artistName: string, artistId: string) => {
        // clearing previous selections
        dispatch(actions.togglePlayer(false));

        apis.getSongs(artistId, state, dispatch);
        apis.getArtistDiscogs(artistName, dispatch);

        toggleHandler();
    }

    */

    return (
        <div className="search_container">
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
                <Button type="submit" id="submit">Search</Button>
            </InputGroup>
            {
                state.toggleSearchResultsView && 
                <Suspense fallback={<Skeleton count={10} />}>
                    <SearchResults submitSearch={submitSearch} totalArtists={state.totalArtists} />
                </Suspense>
            }
        </div>
    );
}

export default SearchBar;