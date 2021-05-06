import React, { useState, useContext, createContext, useRef } from "react";
import axios from 'axios';
import * as secrets from '../secrets.json';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [currentArtist, setCurrentArtist] = useState('none');
    const [totalArtists, setTotalArtists] = useState([]);

    const [songs, setSongs] = useState([]);

    const [currentArtistIdDiscogs, setCurrentArtistIdDiscogs] = useState(null);

    const [artistDetails, setArtistDetails] = useState({});

    const [currentSong, setCurrentSong] = useState({});

    const [token, setToken] = useState('');

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
            console.log(response.data.access_token);
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

        //if(token !== '') {
            try {
                const response = await axios.get(apiParams, { headers });
                setTotalArtists(response.data.artists.items[0]);
                console.log(response);
                console.log(totalArtists);
                //totalArtists.length === 1 && setCurrentArtist(response.data.artists.items[0].id);
                setCurrentArtist(response.data.artists.items[0].id);
                console.log(currentArtist);
            } catch (error) {
                console.error(error);
            }
        //}
    };

    const getSongs = async () => {

        const auth = 'Bearer ' + token;

        const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth,
            'withCredentials': true
        };

        const url = 'https://api.spotify.com/v1/artists/';

        const apiParams = url + currentArtist + '/top-tracks?market=US';

        //if(token !== '') {
            try {
                const response = await axios.get(apiParams, { headers });
                console.log(response.data.tracks);
                setSongs(response.data.tracks);
            } catch (error) {
                console.error(error);
            }
        //} else {
            //console.log('problem')
        //}
    };

    // Discogs APIs
    const getArtistDetails = async () => {
        const url = "https://api.discogs.com/artists/";
        // const params = currentArtistIdDiscogs;
        const params = '10263';
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            setArtistDetails(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getArtistDiscogs = async (artistName) => {
        const url = "https://api.discogs.com/database/search?";
        const params = 'q=' + artistName + '&type=artist&token=' + secrets.discogs.token;
        const endPoint = url + params;

        try {
            const response = await axios.get(endPoint);
            const artistId = response.data.results[0].id;
            setCurrentArtistIdDiscogs(artistId.toString());
            getArtistDetails();
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
        getAuth,
        getArtist,
        getSongs,
        getArtistDiscogs,
        setCurrentSong
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };