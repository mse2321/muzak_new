import React from 'react';
import { useStateContext } from '../../context/state';
import InfoButton from '../InfoButton/';
import AudioPlayer from '../AudioPlayer/';
import Profile from '../Profile/';

const Sidebar = () => {
    const { 
		togglePlayer, 
        toggleProfile 
	} = useStateContext();

    return (
        <aside id="album_player_section">
            <InfoButton />
            {
                togglePlayer && <AudioPlayer />
            }
            {
                toggleProfile && <Profile />
            }
        </aside>
    );
}

export default Sidebar;