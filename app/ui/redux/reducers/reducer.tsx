import { IAction } from '../../../lib';

const stateReducer = (state: any, action: IAction) => {
    switch (action.type) {
        case 'set_total_artists':
            return { ...state, totalArtists: action.payload };
        case 'set_token':
            return { ...state, token: action.payload };
        case 'set_search_input':
            return { ...state, searchInput: action.payload };
        case 'set_songs':
            return { ...state, songs: action.payload };
        case 'set_artist_details':
            return { ...state, artistDetails: action.payload };
        case 'set_current_song':
            return { ...state, currentSong: action.payload };
        case 'set_song_index':
            return { ...state, songIndex: action.payload };
        case 'toggle_player':
            return { ...state, togglePlayer: action.payload };
        case 'toggle_search_results':
            return { ...state, toggleSearchResults: action.payload };
        case 'toggle_profile':
            return { ...state, toggleProfile: action.payload };
        case 'toggle_search_results_view':
            return { ...state, toggleSearchResultsView: action.payload };
        case 'toggle_sidebar':
            return { ...state, toggleSidebar: action.payload };
        case 'toggle_display_no_tracks_message':
            return { ...state, displayNoTracksMessage: action.payload };
        case 'toggle_error_view':
            return { ...state, showErrorView: action.payload };
        default:
            throw new Error();
    }
};

export default stateReducer;