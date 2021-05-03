import React from 'react';
import { useStateContext } from '../../context/state';

const Song = (props: any) => {
    const { songData } = props;
    const { setCurrentSong } = useStateContext();

    const playSongs = () => {
        // sends the songData to the AudioPlayer component to play
        return setCurrentSong ? setCurrentSong(songData) : '';
    }

    return (
        <li className="tracks">
            <div>{songData?.name}</div>
            <div>
                <button onClick={playSongs} id="play_buttons">
                    <i className='fa fa-play-circle'></i>
                </button>
            </div>
        </li>
    );
}

export default Song;