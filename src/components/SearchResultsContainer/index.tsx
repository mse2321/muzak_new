"use client"

import React from 'react';
import SearchResults from '../SearchResults';
import SongList from '../SongList';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const SearchResultsContainer = () => {
    const { state } = useStateContext();

    return (
        <section className="searchContainer">
            {
                state.toggleSearchResultsView && <SearchResults />
            }
            {
                !_.isEmpty(state.songs) && <SongList songs={state.songs ? state.songs : []} />
            }
		</section>
    );
}

export default SearchResultsContainer;