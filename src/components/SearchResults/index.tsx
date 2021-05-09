import React from 'react';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const SearchResults = () => {
    const { 
        totalArtists,
        getSongs,
        getArtistDiscogs,
        setToggleMultipleSearchView,
        songs,
        setToggleSearchResults,
    } = useStateContext();

    const reSubmitSearch = (artistName: string, artistId: string) => {
        getSongs(artistId)
        .then(getArtistDiscogs(artistName))

        !_.isEmpty(songs) && setToggleSearchResults(true);
        setToggleMultipleSearchView(false);
    }

    return (
		<div id="search_results">
            <h2>Search Results</h2>
            <p>Please choose an option from the following:</p>
            <ul>
                {
                    !_.isEmpty(totalArtists) && totalArtists?.map((artist: any, index: number) => {
                        return <li key={index} className="result" onClick={() => reSubmitSearch(artist?.name, artist?.id)}>
                            { artist?.name }
                        </li>
                    })
                }
            </ul>
		</div>
    );
}

export default SearchResults;