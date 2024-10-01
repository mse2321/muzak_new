
"use client"
import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/state';
import Image from 'next/image';
import * as actions from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
    const { state, dispatch } = useStateContext();

    const player = document.getElementById('music');

    const [activeButton, setActiveButton] = useState<string>('pause');
    const [playerIssue, setPlayerIssue] = useState<boolean>(false);

    useEffect(() => {
        player?.setAttribute('src', (state.currentSong?.preview_url as string));
    }, [player, state.currentSong]);

    const actionMessage = 'Back to results';

    const replaySong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        player ? setPlayerIssue(false) : setPlayerIssue(true);
        (player as HTMLAudioElement)?.play();
    }

    const pauseSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        (player as HTMLAudioElement)?.pause();
    }

    const previousSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        let currentSongIndex = state.songIndex!;
        const newIndex = currentSongIndex - 1;
        const prevSrc = state.songs && state.songs[newIndex];
        dispatch(actions.setCurrentSong(prevSrc));
        dispatch(actions.setSongIndex(newIndex));
    }

    const nextSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        let currentSongIndex = state.songIndex!;
        const newIndex = currentSongIndex + 1;
        const nextSrc = state.songs && state.songs[newIndex];
        dispatch(actions.setCurrentSong(nextSrc));
        dispatch(actions.setSongIndex(newIndex));
    }
    
    const hidePlayer = () => {
        dispatch(actions.toggleSidebar(false));
        dispatch(actions.togglePlayer(false));
    }

    return (
        <div className="audioPlayer_container">
            <div id="audioPlayer">
                <Image className="album_art" src={ state.currentSong?.album?.images[0]?.url } alt="album art" width={300} height={300} />
                <div id="song_name_display">
                    {
                        playerIssue ? 'Something went wrong. Please try again.' :
                        (<React.Fragment>
                            <p className='artist_name'>{ state.currentSong?.name }</p>
                            <p className='album'>{ state.currentSong?.album?.name }</p>
                        </React.Fragment>)
                    }
                </div>
                <div id="controls_wrap">
                    <div id="audio_controls">
                        <FontAwesomeIcon 
                            icon={faStepBackward} 
                            id="previous_song" 
                            role="button"
                            className={activeButton === 'previous_song' ? 'active_player_button' : ''} 
                            onClick={() => previousSong('previous_song')} />
                        <FontAwesomeIcon 
                            icon={faPlay} 
                            id="play" 
                            role="button"
                            className={activeButton === 'play' ? 'active_player_button' : ''} 
                            onClick={() => replaySong('play')} />
                        <FontAwesomeIcon 
                            icon={faPause} 
                            id="pause" 
                            role="button"
                            className={activeButton === 'pause' ? 'active_player_button' : ''} 
                            onClick={() => pauseSong('pause')} />
                        <FontAwesomeIcon 
                            icon={faStepForward} 
                            id="next_song" 
                            role="button"
                            className={activeButton === 'next_song' ? 'active_player_button' : ''} 
                            onClick={() => nextSong('next_song')} />
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
