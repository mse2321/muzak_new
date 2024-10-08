import React from 'react';
import ContentContainer from './ContentContainer';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import SearchResultsContainer from "./SearchResultsContainer";
import { StateProvider } from '../context/state';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    return (
        <React.StrictMode>
            <StateProvider>
                <Container fluid>
                    <Row id="content_wrap">
                        <Header />
                        <Col xs={12} md={7} lg={7} xl={7}>
                            <ContentContainer>
                                <SearchBar />
                                <SearchResultsContainer />
                            </ContentContainer>
                        </Col>
                        <Col className="sidebar_container" xs={12} md={5} lg={5} xl={5}>
                            <Sidebar />
                        </Col>
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>
            </StateProvider>
        </React.StrictMode>
    )
}

export default App;