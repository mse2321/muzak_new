import React from 'react';
import { useStateContext } from '../../context/state';
import _ from 'lodash';
import * as actions from '../../actions/actions';
import * as apis from '../../apis/Apis';

const SearchResults = () => {
    const { state, dispatch } = useStateContext();

    const submitSearch = (artistName: string, artistId: string) => {
        // clearing previous selections
        dispatch(actions.togglePlayer(false));

        apis.getSongs(artistId, state, dispatch);
        apis.getArtistDiscogs(artistName, dispatch);

        !_.isEmpty(state.songs) && dispatch(actions.toggleSearchResults(true));
        dispatch(actions.toggleSearchResultsView(false));
    }

    return (
		<div id="search_results">
            <h2>Search Results</h2>
            <p>Please choose an option from the following:</p>
            <ul>
                {
                    !_.isEmpty(state.totalArtists) ? state.totalArtists?.map((artist?: any, index?: number) => {
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