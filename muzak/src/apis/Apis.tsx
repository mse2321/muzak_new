import axios from 'axios';
import { CurrentSong } from '../interfaces';
import * as actions from '../actions/actions';
import { IState } from '../interfaces';
import _ from 'lodash';

const apiKeyDiscogs = process.env.REACT_APP_APIKEYDISCOGS;
const apiSecretSpotify = process.env.REACT_APP_APISECRETSPOTIFY;

// Spotify APIs
export const getAuth = async (dispatch: Function) => {
    const auth = 'Basic ' + apiSecretSpotify;

    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth
    };

    const url = "https://accounts.spotify.com/api/token";
    const body = 'grant_type=client_credentials';

    try {
        const response = await axios.post(url, body, { headers });
        dispatch(actions.setToken(response.data.access_token));
    } catch (error) {
        dispatch(actions.toggleErrorView(true));
        console.error(error);
    }
};

export const getArtist = async (artistName: String, state: IState, dispatch: Function) => {
    const auth = 'Bearer ' + state.token;

    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth
    };


    const apiItems = { 
        url: "https://api.spotify.com/v1/search?",
        q: artistName,
        type: "artist"
    };

    const apiParams = apiItems.url 
    + 'q=' 
    + apiItems.q
    + '&type=' 
    + apiItems.type;

    if(!_.isEmpty(state.token)) {
        try {
            const response = await axios.get(apiParams, { headers });
            dispatch(actions.setTotalArtists(response.data.artists.items));
        } catch (error) {
            dispatch(actions.toggleErrorView(true));
            console.error(error);
        }
    } else {
        console.log('problem with token for search');
    }
};

export const getSongs = async (id: string, state: IState, dispatch: Function) => {
    const auth = 'Bearer ' + state.token;

    const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth     
    };

    const url = 'https://api.spotify.com/v1/artists/';

    const apiParams = url + id + '/top-tracks?market=US';

    if(!_.isEmpty(state.token) && id !== 'none') {
        try {
            const response = await axios.get(apiParams, { headers });
            const allTracks = response.data.tracks;

            // need to only include tracks with preview_urls
            const tracksWithPreviews = allTracks.filter((track: CurrentSong) => !_.isEmpty(track?.preview_url));

            dispatch(actions.setSongs(tracksWithPreviews));
        } catch (error) {
            dispatch(actions.toggleErrorView(true));
            console.error(error);
        }
    } else {
        console.log('problem with token for songs');
    }
};

// Discogs APIs
const getArtistDetails = async (id: string, dispatch: Function) => {
    const url = "https://api.discogs.com/artists/";
    const endPoint = url + id;

    try {
        const response = await axios.get(endPoint);
        dispatch(actions.setArtistDetails(response.data));
    } catch (error) {
        dispatch(actions.toggleErrorView(true));
        console.error(error);
    }
};

export const getArtistDiscogs = async (artistName: string, dispatch: Function) => {
    const url = "https://api.discogs.com/database/search?";
    const params = 'q=' + artistName + '&type=artist&token=' + apiKeyDiscogs;
    const endPoint = url + params;

    try {
        const response = await axios.get(endPoint);
        const artistId = response?.data.results[0].id;
        getArtistDetails(artistId.toString(), dispatch);
    } catch (error) {
        dispatch(actions.toggleErrorView(true));
        console.error(error);
    }
};
