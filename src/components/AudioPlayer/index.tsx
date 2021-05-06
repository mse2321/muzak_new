import React from 'react';
import { useStateContext } from '../../context/state';

const AudioPlayer = (props: any) => {
    const { currentSong } = useStateContext();

    const actionMessage = 'Back to results';

    const replaySong = () => {
        console.log('song is restarting');
    };

    const pauseSong = () => {
        console.log('song is paused');
    };
    
    const hidePlayer = () => {
        console.log('player is hidden');
    };

    return (
        <div id="audioPlayer_wrap">
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
                        <i className='fa fa-play control_button' onClick={replaySong}></i>
                        <i className='fa fa-pause control_button' onClick={pauseSong}></i>
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
