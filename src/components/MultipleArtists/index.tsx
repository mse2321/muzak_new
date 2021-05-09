import React from 'react';
import { useStateContext } from '../../context/state';
import _ from 'lodash';

const MultipleArtists = () => {
    const { 
        totalArtists,
        getAuth,
        getSongs,
        getArtistDiscogs,
        setToggleMultipleSearchView,
        songs,
        setToggleSearchResults,
    } = useStateContext();

    const reSubmitSearch = (artistName: string, artistId: string) => {
        getAuth()
        .then(getSongs(artistId))
        .then(getArtistDiscogs(artistName))

        !_.isEmpty(songs) && setToggleSearchResults(true);
        setToggleMultipleSearchView(false);
    }

    return (
		<div id="multi_results">
            <h2>Multiple Results</h2>
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

export default MultipleArtists;