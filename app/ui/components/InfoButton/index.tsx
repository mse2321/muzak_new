import { useStateContext } from '../../redux/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../redux/actions/actions';

const InfoButton = () => {
	const { dispatch } = useStateContext();
    const toggleHandler = () => {
        dispatch(actions.toggleSidebar(true));
        dispatch(actions.toggleDisplayNoTracksMessage(false));
        dispatch(actions.toggleProfile(true));
    }

    return (
        <button className="info" aria-label="information button">
            <FontAwesomeIcon type="button" icon={faInfoCircle} onClick={() => toggleHandler()} />
		</button>
    );
}

export default InfoButton;