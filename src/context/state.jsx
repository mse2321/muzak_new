import React, { useState, useContext, createContext } from "react";
import axios from 'axios';
import * as secrets from '../secrets.json';
import _ from 'lodash';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [currentArtist, setCurrentArtist] = useState('none');
    const [totalArtists, setTotalArtists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [artistDetails, setArtistDetails] = useState({});
    const [currentSong, setCurrentSong] = useState({});
    const [token, setToken] = useState('');
    const [togglePlayer, setTogglePlayer] = useState(false);
    const [toggleSearchResults, setToggleSearchResults] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleMultipleSearchView, setToggleMultipleSearchView] = useState(false);

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
        } catch (error) {
            console.error(error);
        }
    };

    const getArtist = async (artistName) => {
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
                totalArtists.length === 1 && setCurrentArtist(response.data.artists.items[0].id)
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('problem with token for search');
        }
    };

    const getSongs = async (id) => {

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
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('problem with token for songs')
        }
    };

    // Discogs APIs
    const getArtistDetails = async (id) => {
        const url = "https://api.discogs.com/artists/";
        // const params = '10263';
        const endPoint = url + id;

        try {
            const response = await axios.get(endPoint);
            setArtistDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getArtistDiscogs = async (artistName) => {
        console.log(artistName);
        const url = "https://api.discogs.com/database/search?";
        const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            const artistId = response?.data.results[0].id;
            getArtistDetails(artistId.toString());
        } catch (error) {
            console.error(error);
        }
    }

    const defaultContext = {
        currentArtist,
        songs,
        artistDetails,
        currentSong,
        totalArtists,
        togglePlayer,
        toggleSearchResults,
        toggleProfile,
        toggleMultipleSearchView,
        getAuth,
        getArtist,
        getSongs,
        getArtistDiscogs,
        setCurrentSong,
        setTogglePlayer,
        setToggleSearchResults,
        setToggleProfile,
        setToggleMultipleSearchView,
        setTotalArtists
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };