import React from 'react';
import ContentContainer from './ContentContainer';
import SearchBar from './SearchBar/';
import Sidebar from './Sidebar/';
import SearchResultsContainer from "./SearchResultsContainer/";
import { StateProvider } from '../context/state';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
        <React.StrictMode>
            <StateProvider>
                <Container fluid>
                    <Row id="content_wrap">
                        <Col xs={12} xl={7}>
                            <ContentContainer>
                                <SearchBar />
                                <SearchResultsContainer />
                            </ContentContainer>
                        </Col>
                        <Col className="sidebar_container" xs={12} xl={5}>
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
            </StateProvider>
        </React.StrictMode>
    )
}

export default App;