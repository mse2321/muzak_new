import React from 'react';
import { useStateContext } from '../../context/state';
import AudioPlayer from '../AudioPlayer/';
import Profile from '../Profile/';

const Sidebar = () => {
    const { 
		togglePlayer, 
        toggleProfile,
        toggleSidebar,
        currentSong,
        displayNoTracksMessage
	} = useStateContext();

    return (
        <aside id="album_player_section" className={toggleSidebar ? '' : 'hidden'}>
            { 
                currentSong?.preview_url ? togglePlayer && <AudioPlayer /> :
                <div className={"no_tracks" + (!displayNoTracksMessage ? ' hidden' : '')}>
                    Sorry Spotify does not have preview tracks available for this artist.
                    Check out their profile or select a new artist.
                </div>
            }
            { toggleProfile && <Profile /> }
        </aside>
    );
}

export default Sidebar;