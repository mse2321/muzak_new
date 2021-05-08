import React from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const Song = (props: any) => {
    const { songData } = props;
    const { setCurrentSong, setTogglePlayer } = useStateContext();

    const playSongs = () => {
        setTogglePlayer(true);
        // sends the songData to the AudioPlayer component to play
        return setCurrentSong ? setCurrentSong(songData) : '';
    }

    return (
        <Row as={'li'} className="tracks">
            <Col xl={11} >{songData?.name}</Col>
            <Col className="d-flex flex-row-reverse">
                <button onClick={playSongs} id="play_buttons">
                    <FontAwesomeIcon icon={faPlayCircle} />
                </button>
            </Col>
        </Row>
    );
}

export default Song;