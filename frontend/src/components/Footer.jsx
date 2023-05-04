import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Nikita</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
