import React, { useEffect } from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
    const { 
        currentSong,
        setTogglePlayer 
    } = useStateContext();

    const player = document.getElementById('music');

    useEffect(() => {
        player?.setAttribute('src', currentSong?.preview_url)
    }, [player, currentSong]);

    const actionMessage = 'Back to results';

    const replaySong = () => {
        (player as HTMLAudioElement).play();
    };

    const pauseSong = () => {
        (player as HTMLAudioElement).pause();
    };
    
    const hidePlayer = () => {
        setTogglePlayer(false);
    };

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
                        <FontAwesomeIcon icon={faPlay} onClick={replaySong} />
                        <FontAwesomeIcon icon={faPause} onClick={pauseSong} />
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
