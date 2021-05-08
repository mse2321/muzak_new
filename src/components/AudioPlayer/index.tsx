import React, { useState, useEffect } from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = (props: any) => {
    const { currentSong } = useStateContext();
    const [audio, setAudio] = useState(new Audio());

    useEffect(() => {
        setAudio(new Audio(currentSong?.preview_url));
    }, [currentSong]);

    const actionMessage = 'Back to results';

    const replaySong = () => {
        audio.play();
    };

    const pauseSong = () => {
        audio.pause();
    };
    
    const hidePlayer = () => {
        console.log('player is hidden');
    };

    return (
        <div className={"audioPlayer_container"}>
            <audio id="music" controls>
                <source src={ currentSong?.preview_url } type="audio/mpeg" />
            </audio>
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
