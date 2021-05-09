import React from 'react';
import SearchResults from '../SearchResults/';
import SongList from '../SongList';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const SearchResultsContainer = () => {
    const { 
        songs, 
        totalArtists,
        toggleMultipleSearchView
    } = useStateContext();

    return (
        <section className="searchContainer">
            {
                !_.isEmpty(songs) && <SongList songs={songs ? songs : []} />
            }
            {
                toggleMultipleSearchView && ((totalArtists as Array<string>)?.length > 1 && <SearchResults />)
            }
		</section>
    );
}

export default SearchResultsContainer;