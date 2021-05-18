import React from 'react';
import { useStateContext } from '../../context/state';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

const Profile = () => {
	const { 
		artistDetails,
		setToggleProfile,
		setToggleSidebar
	} = useStateContext();

	const toggleHandler = () => {
		setToggleSidebar(false);
		setToggleProfile(false);
	}

    return (
		<div id="artist_info">
			<div className="close">
				<Button onClick={() => toggleHandler()}>X</Button>
			</div>
			<div className="content">
				{
					!_.isEmpty(artistDetails) ? (<React.Fragment>
						<h3>{ artistDetails?.name }</h3>
						<p>{ artistDetails?.profile}</p>
						<a href={artistDetails?.uri} target="_blank" rel="noreferrer">
							{ 'Check out the rest of the ' + artistDetails?.name + ' profile from Discogs' }
						</a>
						</React.Fragment>
					) : 'Nothing to see here until you search for something'
				}
			</div>
		</div>
    );
}

export default Profile;