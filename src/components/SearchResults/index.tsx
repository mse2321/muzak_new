import React from 'react';
import { useStateContext } from '../../context/state';
import { Container, Row, Col } from 'react-bootstrap';
import CloseButton from '../CloseButton';
import _ from 'lodash';
import * as actions from '../../actions/actions';
import * as apis from '../../apis/Apis';

const SearchResults = () => {
    const { state, dispatch } = useStateContext();

    const toggleHandler = () => {
        !_.isEmpty(state.songs) && dispatch(actions.toggleSearchResults(true));
		dispatch(actions.toggleSearchResultsView(false));
	}

    const resetSearchInput = () => {
        dispatch(actions.setSearchInput(''));
        toggleHandler();
	}

    const submitSearch = (artistName: string, artistId: string) => {
        // clearing previous selections
        dispatch(actions.togglePlayer(false));

        apis.getSongs(artistId, state, dispatch);
        apis.getArtistDiscogs(artistName, dispatch);

        toggleHandler();
    }

    return (
		<Container fluid id="search_results">
            <Row className="align-self-end">
                <Col>
                {
                    state.totalArtists.length === 0 && <CloseButton closeAction={resetSearchInput}/>
                }
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Search Results</h2>
                    <p>Please choose an option from the following:</p>
                    <ul>
                        {
                            !_.isEmpty(state.totalArtists) ? state.totalArtists?.map((artist?: any, index?: number) => {
                                return <li key={index} className="result" onClick={() => submitSearch(artist?.name, artist?.id)}>
                                    { artist?.name }
                                </li>
                            }) : <p className="search_issue">Sorry there was a problem. Please try again</p>
                        }
                    </ul>
                </Col>
            </Row>
		</Container>
    );
}

export default SearchResults;