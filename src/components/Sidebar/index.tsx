import React from 'react';
import { useStateContext } from '../../context/state';
import AudioPlayer from '../AudioPlayer/';
import Profile from '../Profile/';
import { Button } from 'react-bootstrap';
import * as actions from '../../actions/actions';

const Sidebar = () => {
    const {state, dispatch} = useStateContext();

    const closeNoTrackMessageHandler = () => {
		dispatch(actions.toggleDisplayNoTracksMessage(false));
	}

    return (
        <aside id="album_player_section" className={state.toggleSidebar ? '' : 'hidden'}>
            { 
                state.currentSong?.preview_url ? state.togglePlayer && <AudioPlayer /> :
                <div className={"no_tracks" + (!state.displayNoTracksMessage ? ' hidden' : '')}>
                    <div className="close">
                        <Button onClick={() => closeNoTrackMessageHandler()}>X</Button>
                    </div>
                    Sorry can't find preview tracks available for this artist right now.
                    Please try again, check out their profile or select a new artist.
                </div>
            }
            { state.toggleProfile && <Profile /> }
        </aside>
    );
}

export default Sidebar;