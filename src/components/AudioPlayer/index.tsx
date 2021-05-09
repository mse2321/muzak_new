import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { CurrentSong } from '../../interfaces';

const AudioPlayer = () => {
    const { 
        currentSong,
        setTogglePlayer,
        setToggleSidebar,
        songs
    } = useStateContext();

    const player = document.getElementById('music');
    const playerSrc = (player as HTMLAudioElement).src;

    const [activeButton, setActiveButton] = useState<string>('');

    const findSongInList = (activeCommand: string) => {
        let songIndex: number;
        const resultsIndex = songs?.indexOf(playerSrc as CurrentSong) as number;

        return activeCommand === 'previousSong' ? songIndex = resultsIndex - 1 : resultsIndex + 1;
    }

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

    const previousSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        const prevSongIndex = findSongInList('previousSong') as number;
        console.log(prevSongIndex);
        const prevSrc = songs?[prevSongIndex];

        activeButton === 'previous_song' &&
        player?.setAttribute('src', (prevSrc?.preview_url as string));
    }

    const nextSong = (buttonPressed: string) => {
        setActiveButton(buttonPressed);
        const nextSongIndex = findSongInList('nextSong');
        console.log(nextSongIndex);
        const nextSrc = songs?[nextSongIndex];

        activeButton === 'next_song' &&
        player?.setAttribute('src', (nextSrc?.preview_url as string));
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
