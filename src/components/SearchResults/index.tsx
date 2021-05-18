import React from 'react';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const SearchResults = () => {
    const { 
        totalArtists,
        getSongs,
        getArtistDiscogs,
        setToggleSearchResultsView,
        songs,
        setToggleSearchResults,
        setTogglePlayer
    } = useStateContext();

    const submitSearch = (artistName: string, artistId: string) => {
        // clearing previous selections
        setTogglePlayer(false);

        getSongs(artistId)
        .then(getArtistDiscogs(artistName))

        !_.isEmpty(songs) && setToggleSearchResults(true);
        setToggleSearchResultsView(false);
    }

    return (
		<div id="search_results">
            <h2>Search Results</h2>
            <p>Please choose an option from the following:</p>
            <ul>
                {
                    !_.isEmpty(totalArtists) ? totalArtists?.map((artist?: any, index?: number) => {
                        return <li key={index} className="result" onClick={() => submitSearch(artist?.name, artist?.id)}>
                            { artist?.name }
                        </li>
                    }) : 'Sorry there was a problem. Please try again'
                }
            </ul>
		</div>
    );
}

export default SearchResults;