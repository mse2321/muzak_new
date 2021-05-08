import React, { useRef } from 'react';
import MultipleArtists from '../MultipleArtists';
import SongList from '../SongList';
import { useStateContext } from '../../context/state';

const SearchResultsContainer = (props: any) => {
    const { songs, totalArtists } = useStateContext();

    const allArtists = useRef(totalArtists);
    const currentArtists = allArtists.current;

    return (
        <section className="searchContainer">
            <SongList songs={songs ? songs : []} />
            {
                currentArtists.length > 1 && <MultipleArtists artists={currentArtists} />
            }
		</section>
    );
}

export default SearchResultsContainer;