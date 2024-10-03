import React from 'react';
import { useStateContext } from '../../context/state';
import CloseButton from '../CloseButton';
import _ from 'lodash';
import * as actions from '../../actions/actions';

const Profile = () => {
	const { state, dispatch } = useStateContext();

	const toggleHandler = () => {
		dispatch(actions.toggleProfile(false));
	}

    return (
		<div id="artist_info">
			<CloseButton closeAction={toggleHandler}/>
			<div className="content">
				{
					!_.isEmpty(state.artistDetails) ? (<React.Fragment>
						<h3>{ state.artistDetails?.name }</h3>
						<p>{ state.artistDetails?.profile}</p>
						<a href={state.artistDetails?.uri} target="_blank" rel="noreferrer">
							{ 'Check out the rest of their profile from Discogs' }
						</a>
						</React.Fragment>
					) : 'Get started by searching for an artist!'
				}
			</div>
		</div>
    );
}

export default Profile;