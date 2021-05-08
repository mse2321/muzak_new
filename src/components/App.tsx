import React from 'react';
import ContentContainer from './ContentContainer';
import SearchBar from './SearchBar/';
import AudioPlayer from './AudioPlayer/';
import Profile from './Profile/';
import SearchResultsContainer from "./SearchResultsContainer/";
import { StateProvider } from '../context/state';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
        <React.StrictMode>
            <StateProvider>
                <Container fluid>
                    <Row id="content_wrap">
                        <Col xl={7}>
                            <ContentContainer>
                                <SearchBar />
                                <SearchResultsContainer />
                            </ContentContainer>
                        </Col>
                        <Col>
                            <AudioPlayer />
                            <Profile />
                        </Col>
                    </Row>
                </Container>
            </StateProvider>
        </React.StrictMode>
    )
}

export default App;