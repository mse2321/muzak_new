'use client'
import { useEffect } from 'react';
import ContentContainer from './ui/components/ContentContainer';
import SearchBar from './ui/components/SearchBar';
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';
import Sidebar from './ui/components/Sidebar';
import SearchResultsContainer from "./ui/components/SearchResultsContainer";
import { Container, Row, Col } from 'react-bootstrap';
import { useStateContext } from './ui/redux/state';
import _ from 'lodash';
import * as apis from './apis/Apis';

export default function Home() {

  const { state, dispatch } = useStateContext();

  useEffect(() => {
      apis.getAuth(dispatch);
  }, [dispatch])

  return (
    <Container fluid className="main_container">
      <Row className="content_wrap">
        <Col>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
              <Col xs={12} md={12} lg={7} xl={7}>
                  <SearchBar />
                  <ContentContainer>
                      <SearchResultsContainer />
                  </ContentContainer>
              </Col>
              <Col className="sidebar_container" xs={12} md={12} lg={5} xl={5}>
                {
                  !_.isEmpty(state.songs) && <Sidebar />
                }
              </Col>
          </Row>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}
