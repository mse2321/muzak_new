import { useStateContext } from '../../redux/state';
import AudioPlayer from '../AudioPlayer';
import Profile from '../Profile';
import { Button } from 'react-bootstrap';
import * as actions from '../../redux/actions/actions';

const Sidebar = () => {
    const {state, dispatch} = useStateContext();

    const closeNoTrackMessageHandler = () => {
		dispatch(actions.toggleDisplayNoTracksMessage(false));
	}

    return (
        <aside id="album_player_section">
            { 
                state.currentSong?.preview_url ? state.togglePlayer && <AudioPlayer /> :
                <div className={"no_tracks" + (!state.displayNoTracksMessage ? ' hidden' : '')}>
                    <div className="close">
                        <Button onClick={() => closeNoTrackMessageHandler()}>X</Button>
                    </div>
                    Sorry cannot find preview tracks available for this artist right now.
                    Please try again and select a new artist.
                </div>
            }
            { state.toggleProfile && <Profile /> }
        </aside>
    );
}

export default Sidebar;