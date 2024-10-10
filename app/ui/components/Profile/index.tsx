import { useStateContext } from '../../redux/state';
import CloseButton from '../CloseButton';
import _ from 'lodash';
import * as actions from '../../redux/actions/actions';

const Profile = () => {
	const { state, dispatch } = useStateContext();

	const toggleHandler = () => {
		dispatch(actions.toggleProfile(false));
	}

    return (
		<div id="artist_info">
			<CloseButton closeAction={toggleHandler}/>
			<div className="content">
				{
					!_.isEmpty(state.artistDetails) ? (<>
						<h3>{ state.artistDetails?.name }</h3>
						<p>{ state.artistDetails?.profile}</p>
						<a href={state.artistDetails?.uri} target="_blank" rel="noreferrer" className="links">
							{ 'Check out the rest of their profile from Discogs' }
						</a>
						</>
					) : 'Get started by searching for an artist!'
				}
			</div>
		</div>
    );
}

export default Profile;