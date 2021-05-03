import React, { useState, useContext, createContext } from "react";
import axios from 'axios';
import { DefaultContext } from '../interfaces/';

const StateContext = createContext<DefaultContext>(undefined!);
const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentArtist, setCurrentArtist] = useState({});
    const [songs, setSongs] = useState({});

    const [currentArtistDiscogs, setCurrentArtistDiscogs] = useState({});
    const [artistDetails, setArtistDetails] = useState({});

    const [currentSong, setCurrentSong] = useState({});

    // Spotify APIs
    const getArtist = async (artistName: string) => {
        const apiItems = { 
            url: "https://api.spotify.com/v1/search/",
            params: {
                q: artistName,
                type: "artist"
            }
        };

        try {
            const response = await axios.get(apiItems.url + apiItems.params);
            setCurrentArtist(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getSongs = async (artistId: string) => {
        const apiItems = { 
            url: "https://api.spotify.com/v1/artists/",
            params: {
                artist_id: artistId,
                type: "/top-tracks?country=US"
            }
        };

        try {
            const response = await axios.get(apiItems.url + apiItems.params);
            setSongs(response);
        } catch (error) {
            console.error(error);
        }
    };

    // Discogs APIs
    const getArtistDiscogs = async (artistName: string) => {
        // TODO - need to move this elsewhere
        const secret_key = "OcuHHDfOEJrlKlNaLVAFCjBLzQqPfmvq";
        const apiItems = { 
            url: "https://api.discogs.com//database/search?",
            params: {
                q: artistName,
                type: "artist",
                key: "FrEJfCEeKbnHxmsEAvJA",
                secret: secret_key
            }
        };

        try {
            const response = await axios.get(apiItems.url + apiItems.params);
            setCurrentArtistDiscogs(response);
        } catch (error) {
            console.error(error);
        }
    }

    const getArtistDetails = async (artistId: string) => {
        const apiItems = { 
            url: "https://api.discogs.com/artists/",
            params: {
                artist_id: artistId
            }
        };

        try {
            const response = await axios.get(apiItems.url + apiItems.params);
            setArtistDetails(response);
        } catch (error) {
            console.error(error);
        }
    };


    const defaultContext = {
        searchTerm,
        currentArtist,
        songs,
        currentArtistDiscogs,
        artistDetails,
        currentSong,
        setSearchTerm,
        getArtist,
        getSongs,
        getArtistDiscogs,
        getArtistDetails,
        setCurrentSong
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };