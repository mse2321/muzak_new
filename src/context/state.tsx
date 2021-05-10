import React, { useState, useContext, createContext } from "react";
import axios from 'axios';
import * as secrets from '../secrets.json';
import _ from 'lodash';
import { IDefaultContext } from '../interfaces/'

const StateContext = createContext<IDefaultContext>({} as IDefaultContext);

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }: any) => {
    const [totalArtists, setTotalArtists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [artistDetails, setArtistDetails] = useState({});
    const [currentSong, setCurrentSong] = useState({});
    const [token, setToken] = useState('');
    const [togglePlayer, setTogglePlayer] = useState(false);
    const [toggleSearchResults, setToggleSearchResults] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleSearchResultsView, setToggleSearchResultsView] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [songIndex, setSongIndex] = useState(null);
    const [displayNoTracksMessage, setDisplayNoTracksMessage] = useState(true);
    const [showErrorView, setShowErrorView] = useState(false);

    // Spotify APIs
    const getAuth = async () => {
        const auth = 'Basic ' + secrets.spotify.secret;

        const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth,
            'withCredentials': true
        };

        const url = "https://accounts.spotify.com/api/token";
        const body = 'grant_type=client_credentials';

        try {
            const response = await axios.post(url, body, { headers });
            setToken(response.data.access_token);
            setShowErrorView(false);
        } catch (error) {
            setShowErrorView(true);
            console.error(error);
        }
    };

    const getArtist = async (artistName: string) => {
        const auth = 'Bearer ' + token;

        const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth,
            'withCredentials': true
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

        if(!_.isEmpty(token)) {
            try {
                const response = await axios.get(apiParams, { headers });
                setTotalArtists(response.data.artists.items);
                setShowErrorView(false);
            } catch (error) {
                setShowErrorView(true);
                console.error(error);
            }
        } else {
            console.log('problem with token for search');
        }
    };

    const getSongs = async (id: string) => {
        const auth = 'Bearer ' + token;

        const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth,
            'withCredentials': true
        };

        const url = 'https://api.spotify.com/v1/artists/';

        const apiParams = url + id + '/top-tracks?market=US';

        if(!_.isEmpty(token) && id !== 'none') {
            try {
                const response = await axios.get(apiParams, { headers });
                setSongs(response.data.tracks);
                setShowErrorView(false);
            } catch (error) {
                setShowErrorView(true);
                console.error(error);
            }
        } else {
            console.log('problem with token for songs')
        }
    };

    // Discogs APIs
    const getArtistDetails = async (id: string) => {
        const url = "https://api.discogs.com/artists/";
        const endPoint = url + id;

        try {
            const response = await axios.get(endPoint);
            setArtistDetails(response.data);
            setShowErrorView(false);
        } catch (error) {
            setShowErrorView(true);
            console.error(error);
        }
    };

    const getArtistDiscogs = async (artistName: string) => {
        const url = "https://api.discogs.com/database/search?";
        const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            const artistId = response?.data.results[0].id;
            getArtistDetails(artistId.toString());
            setShowErrorView(false);
        } catch (error) {
            setShowErrorView(true);
            console.error(error);
        }
    }

    const defaultContext: IDefaultContext = {
        songs,
        artistDetails,
        currentSong,
        totalArtists,
        togglePlayer,
        toggleSearchResults,
        toggleProfile,
        toggleSearchResultsView,
        toggleSidebar,
        songIndex,
        displayNoTracksMessage,
        showErrorView,
        getAuth,
        getArtist,
        getSongs,
        getArtistDiscogs,
        setCurrentSong,
        setTogglePlayer,
        setToggleSearchResults,
        setToggleProfile,
        setToggleSearchResultsView,
        setTotalArtists,
        setToggleSidebar,
        setSongIndex,
        setDisplayNoTracksMessage,
        setShowErrorView
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };