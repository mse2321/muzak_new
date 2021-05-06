import React from 'react';
import MultipleArtists from '../MultipleArtists'
import SongList from '../SongList'
import { useStateContext } from '../../context/state';

const SearchResultsContainer = () => {
    const { songs, totalArtists } = useStateContext();

    return (
        <section className="col-xs-12 col-md-8 searchContainer">
            <SongList songs={songs ? songs : []} />
            {
                totalArtists.length > 1 && <MultipleArtists artists={totalArtists} />
            }
		</section>
    );
}

export default SearchResultsContainer;