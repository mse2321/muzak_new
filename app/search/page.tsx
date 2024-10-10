import ContentContainer from '../ui/components/ContentContainer';
import SearchBar from '../ui/components/SearchBar';
import Footer from '../ui/components/Footer';
import Sidebar from '../ui/components/Sidebar';
import SearchResultsContainer from "../ui/components/SearchResultsContainer";
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid>
      <Row id="content_wrap">
          <Col xs={12} md={12} lg={7} xl={7}>
              <ContentContainer>
                  <SearchBar />
                  <SearchResultsContainer />
              </ContentContainer>
          </Col>
          <Col className="sidebar_container" xs={12} md={12} lg={5} xl={5}>
              <Sidebar />
          </Col>
      </Row>
      <Row>
          <Footer />
      </Row>
    </Container>
  )
}
