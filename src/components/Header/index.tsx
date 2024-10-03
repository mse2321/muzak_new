'use client'
import React from 'react';
import InfoButton from '../InfoButton';
import { useStateContext } from '../../context/state';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    const { state } = useStateContext();
    const heading = 'Muzak';
    const introMessage1 = 'Listen to available preview tracks from your favorite artists using ';
    const introMessage2 = ' and artist information from ';
    const spotify = 'Spotify';
    const discogs = 'Discogs';

    return <header>
                <Container fluid className="header_container">
                    <Row className="flex-column-reverse">
                        <Col xs={12} md={10} lg={10} xl={10} className="heading_container">
                            <h1>{heading}</h1>
                            <p>
                                {introMessage1}
                                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">{spotify}</a>
                                {introMessage2}
                                <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer">{discogs}</a>.
                            </p>
                        </Col>
                        <Col className="info_container">
                            <InfoButton />
                        </Col>
                    </Row>
                </Container>
                {/* Putting the audio tag here in order to persist outside of the sidebar */}
                <audio id="music" src={ state.currentSong?.preview_url } />
            </header>
}

export default Header;