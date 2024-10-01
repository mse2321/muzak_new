
export const setToken = (payload: string) => {
    return  {
        type: 'set_token', 
        payload: payload
    };
}

export const setSearchInput = (payload: string) => {
    return  {
        type: 'set_search_input', 
        payload: payload
    };
}

export const setTotalArtists = (payload: Array<object>) => {
    return  {
        type: 'set_total_artists', 
        payload: payload
    };
}

export const setSongs = (payload: Array<object>) => {
    return  {
        type: 'set_songs', 
        payload: payload
    };
}

export const setCurrentSong = (payload: object) => {
    return  {
        type: 'set_current_song', 
        payload: payload
    };
}

export const setSongIndex = (payload: number) => {
    return  {
        type: 'set_song_index', 
        payload: payload
    };
}


export const setArtistDetails = (payload: object) => {
    return  {
        type: 'set_artist_details', 
        payload: payload
    };
}

export const toggleDisplayNoTracksMessage = (payload: boolean) => {
    return  {
        type: 'toggle_display_no_tracks_message', 
        payload: payload
    };
}

export const toggleSidebar = (payload: boolean) => {
    return  {
        type: 'toggle_sidebar', 
        payload: payload
    };
}

export const togglePlayer = (payload: boolean) => {
    return  {
        type: 'toggle_player', 
        payload: payload
    };
}

export const toggleProfile= (payload: boolean) => {
    return  {
        type: 'toggle_profile', 
        payload: payload
    };
}

export const toggleErrorView = (payload: boolean) => {
    return  {
        type: 'toggle_error_view', 
        payload: payload
    };
}

export const toggleSearchResultsView = (payload: boolean) => {
    return  {
        type: 'toggle_search_results_view', 
        payload: payload
    };
}

export const toggleSearchResults = (payload: boolean) => {
    return  {
        type: 'toggle_search_results', 
        payload: payload
    };
}