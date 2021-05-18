import React from 'react';
import { useStateContext } from '../../context/state';
import AudioPlayer from '../AudioPlayer/';
import Profile from '../Profile/';
import { Button } from 'react-bootstrap';

const Sidebar = () => {
    const { 
		togglePlayer, 
        toggleProfile,
        toggleSidebar,
        currentSong,
        displayNoTracksMessage,
        setDisplayNoTracksMessage
	} = useStateContext();

    const closeNoTrackMessageHandler = () => {
		setDisplayNoTracksMessage(false);
	}

    return (
        <aside id="album_player_section" className={toggleSidebar ? '' : 'hidden'}>
            { 
                currentSong?.preview_url ? togglePlayer && <AudioPlayer /> :
                <div className={"no_tracks" + (!displayNoTracksMessage ? ' hidden' : '')}>
                    <div className="close">
                        <Button onClick={() => closeNoTrackMessageHandler()}>X</Button>
                    </div>
                    Sorry can't find preview tracks available for this artist right now.
                    Please try again, check out their profile or select a new artist.
                </div>
            }
            { toggleProfile && <Profile /> }
        </aside>
    );
}

export default Sidebar;