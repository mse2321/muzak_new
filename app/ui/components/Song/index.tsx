import { useStateContext } from '../../redux/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import * as actions from '../../redux/actions/actions';

const Song = (props: any) => {
    const { 
        songData,
        index 
    } = props;

    const { dispatch } = useStateContext();

    const playSongs = () => {
        // sends the songData to the AudioPlayer component to play
        dispatch(actions.setCurrentSong(songData));
        dispatch(actions.toggleSidebar(true));
        dispatch(actions.setSongIndex(index));
        dispatch(actions.toggleDisplayNoTracksMessage(false));
        dispatch(actions.togglePlayer(true));
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