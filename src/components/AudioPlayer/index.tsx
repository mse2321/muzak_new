import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = () => {
    const { 
        currentSong,
        setTogglePlayer,
        setToggleSidebar,
        songs,
        songIndex,
        setSongIndex,
        setCurrentSong
    } = useStateContext();

    const player = document.getElementById('music');

    const [activeButton, setActiveButton] = useState<string>('pause');
    const [playerIssue, setPlayerIssue] = useState<boolean>(false);

    useEffect(() => {
        player?.setAttribute('src', (currentSong?.preview_url as string));
    }, [player, currentSong]);

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
        let currentSongIndex = songIndex!;
        const newIndex = currentSongIndex - 1;
        const prevSrc = songs && songs[newIndex];
        setCurrentSong(prevSrc);
        setSongIndex(newIndex);
    }

    const nextSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        let currentSongIndex = songIndex!;
        const newIndex = currentSongIndex + 1;
        const nextSrc = songs && songs[newIndex];
        setCurrentSong(nextSrc);
        setSongIndex(newIndex);
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
                    {
                        playerIssue ? 'Something went wrong. Please try again.' :
                        (<React.Fragment>
                            <p className='artist_name'>{ currentSong?.name }</p>
                            <p className='album'>{ currentSong?.album?.name }</p>
                        </React.Fragment>)
                    }
                </div>
                <div id="controls_wrap">
                    <div id="audio_controls">
                        <FontAwesomeIcon 
                            icon={faStepBackward} 
                            id="previous_song" 
                            className={activeButton === 'previous_song' ? 'active_player_button' : ''} 
                            onClick={() => previousSong('previous_song')} />
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
                        <FontAwesomeIcon 
                            icon={faStepForward} 
                            id="next_song" 
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
