import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
    const { 
        currentSong,
        setTogglePlayer,
        setToggleSidebar 
    } = useStateContext();

    const player = document.getElementById('music');

    const [activeButton, setActiveButton] = useState<string>('');

    useEffect(() => {
        player?.setAttribute('src', (currentSong?.preview_url as string));
    }, [player, currentSong]);

    const actionMessage = 'Back to results';

    const replaySong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        (player as HTMLAudioElement)?.play();
    }

    const pauseSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        (player as HTMLAudioElement)?.pause();
    }
    
    const hidePlayer = () => {
        setToggleSidebar(false);
        setTogglePlayer(false);
    }

    return (
        <div className={"audioPlayer_container"}>
            <audio id="music" src={ currentSong?.preview_url } />
            <div id="audioPlayer">
                <img className="album_art" src={ currentSong?.album?.images[0]?.url } alt="" />
                <div id="song_name_display">
                    <p>{ currentSong?.name }</p>
                    <p className='album'>{ currentSong?.album?.name }</p>
                </div>
                <div id="controls_wrap">
                    <div id="audio_controls">
                        <FontAwesomeIcon 
                            icon={faPlay} 
                            id="play" 
                            className={activeButton === 'play' ? 'active_player_button' : ''} 
                            onClick={() => replaySong('play')} />
                        <FontAwesomeIcon 
                            icon={faPause} 
                            id="pause" 
                            className={activeButton === 'pause' ? 'active_player_button' : ''} 
                            onClick={() => pauseSong('pause')} />
                    </div>
                </div>
                <button id="mobile_back" onClick={hidePlayer}>
                    <p>{actionMessage}</p>
                </button>
            </div>
        </div>
    );
}

export default AudioPlayer;
