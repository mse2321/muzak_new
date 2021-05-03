import React from 'react';

const Profile = (props: any) => {
	const {
        currentArtistDiscogs,
		artistDetails
	} = props;

    return (
        <aside id="album_player_section" className="col-xs-12 col-md-4">
			{/* <audio-player></audio-player> */}
				<div id="artist_info">
					<h3>{ currentArtistDiscogs?.name }</h3>
					<img src={ artistDetails?.images[0] } alt={ artistDetails?.name + 'Thumbnail' } />
					<p><a href="{{ bio }}" target="_blank">{ artistDetails?.name + ' Profile from Discogs' }</a></p>
					<ul>
						<li><a href={ artistDetails?.url }>{ artistDetails?.url }</a></li>
					</ul>
				</div>
		</aside>
    );
}

export default Profile;