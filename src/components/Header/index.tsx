import React from 'react';
import InfoButton from '../InfoButton/';
import { useStateContext } from '../../context/state';

const Header = () => {
    const { currentSong } = useStateContext();

    const heading = 'Muzak';
    const introMessage1 = 'Listen to preview tracks from your favorite artists using ';
    const introMessage2 = ' and artist information from ';
    const spotify = 'Spotify';
    const discogs = 'Discogs';

    return <header>
            <h1>{heading}</h1>
            <p>
                {introMessage1}
                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">{spotify}</a>
                {introMessage2}
                <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer">{discogs}</a>.
            </p>
            <InfoButton />
            {/* Putting the audio tag here in order to persist outside of the sidebar */}
            <audio id="music" src={ currentSong?.preview_url } />
        </header>
}

export default Header;