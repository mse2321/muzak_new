import React from 'react';
import { useStateContext } from '../../context/state';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import * as actions from '../../actions/actions';

const Profile = () => {
	const { state, dispatch } = useStateContext();

	const toggleHandler = () => {
		dispatch(actions.toggleProfile(false));
	}

    return (
		<div id="artist_info">
			<div className="close">
				<Button onClick={() => toggleHandler()}>X</Button>
			</div>
			<div className="content">
				{
					!_.isEmpty(state.artistDetails) ? (<React.Fragment>
						<h3>{ state.artistDetails?.name }</h3>
						<p>{ state.artistDetails?.profile}</p>
						<a href={state.artistDetails?.uri} target="_blank" rel="noreferrer">
							{ 'Check out the rest of the ' + state.artistDetails?.name + ' profile from Discogs' }
						</a>
						</React.Fragment>
					) : 'Nothing to see here until you search for something'
				}
			</div>
		</div>
    );
}

export default Profile;