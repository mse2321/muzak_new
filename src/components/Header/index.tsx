'use client'
import React from 'react';
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
                    <Row>
                        <Col className="heading_container">
                            <h1>{heading}</h1>
                            <p>
                                {introMessage1}
                                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="links">{spotify}</a>
                                {introMessage2}
                                <a href="https://www.discogs.com/" target="_blank" rel="noopener noreferrer" className="links">{discogs}</a>.
                            </p>
                        </Col>
                    </Row>
                </Container>
                {/* Putting the audio tag here in order to persist outside of the sidebar */}
                <audio id="music" src={ state.currentSong?.preview_url } />
            </header>
}

export default Header;