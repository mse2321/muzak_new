import React from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const Song = (props: any) => {
    const { 
        songData,
        index 
    } = props;

    const { 
        setCurrentSong, 
        setTogglePlayer,
        setToggleSidebar,
        setSongIndex,
        setDisplayNoTracksMessage
    } = useStateContext();

    const playSongs = () => {
        // sends the songData to the AudioPlayer component to play
        setCurrentSong(songData);
        setToggleSidebar(true);
        setSongIndex(index);
        setDisplayNoTracksMessage(true);
        setTogglePlayer(true);
    }

    return (
        <Row as={'li'} className="tracks">
            <Col xs={8} xl={11} >{songData?.name}</Col>
            <Col className="d-flex flex-row-reverse">
                <button onClick={playSongs} id="play_buttons">
                    <FontAwesomeIcon icon={faPlayCircle} />
                </button>
            </Col>
        </Row>
    );
}

export default Song;