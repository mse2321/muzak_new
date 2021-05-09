import React from 'react';
import MultipleArtists from '../MultipleArtists';
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
                toggleMultipleSearchView &&
                (totalArtists.length > 1 && <MultipleArtists />)
            }
		</section>
    );
}

export default SearchResultsContainer;