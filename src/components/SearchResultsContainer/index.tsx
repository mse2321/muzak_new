import React from 'react';
import MultipleArtists from '../MultipleArtists'
import SongList from '../SongList'
import { useStateContext } from '../../context/state';

const SearchResultsContainer = (props: any) => {
    const { songs } = useStateContext();

    const heading = 'Top Songs';

    const multipleResultsFindArtist = () => {
        //
    }

    return (
        <section className="col-xs-12 col-md-8 searchContainer">
            <SongList songs={songs ? songs : []} />
			<MultipleArtists />
		</section>
    );
}

export default SearchResultsContainer;