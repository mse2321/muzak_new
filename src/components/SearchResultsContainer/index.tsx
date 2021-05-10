import React from 'react';
import SearchResults from '../SearchResults/';
import SongList from '../SongList';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const SearchResultsContainer = () => {
    const { 
        songs, 
        toggleSearchResultsView
    } = useStateContext();

    return (
        <section className="searchContainer">
            {
                toggleSearchResultsView && <SearchResults />
            }
            {
                !_.isEmpty(songs) && <SongList songs={songs ? songs : []} />
            }
		</section>
    );
}

export default SearchResultsContainer;