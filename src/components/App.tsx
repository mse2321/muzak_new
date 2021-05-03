import React from 'react';
import Container from './Container/';
import SearchBar from './SearchBar/';
import AudioPlayer from './AudioPlayer/';
import Profile from './Profile/';
import SearchResultsContainer from "./SearchResultsContainer/";
import { StateProvider } from '../context/state'

const App = () => {
    return (
        <React.StrictMode>
            <StateProvider>
                <Container>
                    <SearchBar />
                    <SearchResultsContainer />
                </Container>
                <AudioPlayer />
                <Profile />
            </StateProvider>
        </React.StrictMode>
    )
}

export default App;