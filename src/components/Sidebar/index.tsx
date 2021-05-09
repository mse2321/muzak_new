import React from 'react';
import { useStateContext } from '../../context/state';
import AudioPlayer from '../AudioPlayer/';
import Profile from '../Profile/';

const Sidebar = () => {
    const { 
		togglePlayer, 
        toggleProfile,
        toggleSidebar 
	} = useStateContext();

    return (
        <aside id="album_player_section" className={toggleSidebar ? '' : ' hidden'}>
            { togglePlayer && <AudioPlayer /> }
            { toggleProfile && <Profile /> }
        </aside>
    );
}

export default Sidebar;